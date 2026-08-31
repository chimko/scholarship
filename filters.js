export function calculateDateMetrics(openingStr, deadlineStr) {
    const today = new Date();
    today.setHours(0,0,0,0);
    const opening = new Date(openingStr);
    const deadline = new Date(deadlineStr);
    opening.setHours(0,0,0,0);
    deadline.setHours(0,0,0,0);

    if (today < opening) {
        const daysUntilOpen = Math.ceil((opening - today) / (1000 * 60 * 60 * 24));
        return { status: "UPCOMING", days: daysUntilOpen, targetDate: openingStr };
    } else if (today >= opening && today <= deadline) {
        const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
        return { status: "ACTIVE", days: daysLeft, targetDate: deadlineStr };
    } else {
        return { status: "CLOSED", days: -1, targetDate: deadlineStr };
    }
}

export function filterScholarships(database, filters, activeGenreFilters) {
    return database.map(item => {
        const metrics = calculateDateMetrics(item.openingDate, item.deadline);
        return { ...item, metrics };
    }).filter(item => {
        const matchOrigin = filters.origin === "ALL" || item.eligibleOrigins.includes("ALL") || item.eligibleOrigins.includes(filters.origin);
        const matchTarget = filters.target === "ALL" || item.hostCountry === filters.target;
        const matchLevel = filters.level === "ALL" || item.levels.includes(filters.level);
        const matchDiscipline = filters.discipline === "ALL" || item.disciplines.includes(filters.discipline);
        
        // Optional GPA filter check
        const matchGpa = isNaN(filters.gpa) || item.minGpa <= filters.gpa;

        // Grouped Genre Filtering
        let matchGenre = true;
        if (!activeGenreFilters.includes("all") && activeGenreFilters.length > 0) {
            const fundingFilters = activeGenreFilters.filter(f => f === "fully-funded" || f === "partial");
            const statusFilters = activeGenreFilters.filter(f => f === "active" || f === "upcoming" || f === "closed");
            const typeFilters = activeGenreFilters.filter(f => f === "government" || f === "university");

            const matchFunding = fundingFilters.length === 0 || fundingFilters.includes(item.fundingType);
            const matchStatus = statusFilters.length === 0 || statusFilters.includes(item.metrics.status.toLowerCase());
            const matchType = typeFilters.length === 0 || typeFilters.includes(item.category);

            matchGenre = matchFunding && matchStatus && matchType;
        }

        return matchOrigin && matchTarget && matchLevel && matchDiscipline && matchGpa && matchGenre;
    });
}
