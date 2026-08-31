import { ALL_COUNTRIES, MASTER_DATABASE } from './database.js';
import { filterScholarships } from './filters.js';

let activeGenreFilters = ["all"];
let currentPage = 1;

function populateCountries() {
    const originSelect = document.getElementById('origin');
    ALL_COUNTRIES.forEach(country => {
        const opt = document.createElement('option');
        opt.value = country;
        opt.textContent = country;
        originSelect.appendChild(opt);
    });
}

function updateSyncTimestamp() {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('syncDateText').textContent = now.toLocaleDateString('en-US', options);
}

function renderMatrix() {
    const origin = document.getElementById('origin').value;
    const target = document.getElementById('target').value;
    const level = document.getElementById('level').value;
    const discipline = document.getElementById('discipline').value;
    const gpa = parseFloat(document.getElementById('gpa').value);
    const perPageVal = parseInt(document.getElementById('perPageSelect').value);

    const filters = { origin, target, level, discipline, gpa };
    const filtered = filterScholarships(MASTER_DATABASE, filters, activeGenreFilters);

    const grid = document.getElementById('scholarshipGrid');
    const paginationBar = document.getElementById('paginationBar');

    const totalPages = perPageVal >= 9999 ? 1 : (Math.ceil(filtered.length / perPageVal) || 1);
    if (currentPage > totalPages) currentPage = 1;

    const startIndex = (currentPage - 1) * perPageVal;
    const paginatedItems = perPageVal >= 9999 ? filtered : filtered.slice(startIndex, startIndex + perPageVal);

    let gpaNote = isNaN(gpa) ? " (GPA optional / bypassed)" : ` (GPA ≤ ${gpa})`;
    document.getElementById('resultsCount').innerHTML = `Found <strong>${filtered.length}</strong> matching global opportunities${gpaNote} — Page ${currentPage} of ${totalPages}`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <h3>No scholarships found matching these parameters</h3>
                <p>Try resetting filters or unselecting active tags.</p>
            </div>
        `;
        paginationBar.innerHTML = "";
        return;
    }

    grid.innerHTML = paginatedItems.map(item => {
        let statusMarkup = "";
        let countdownMarkup = "";

        if (item.metrics.status === "ACTIVE") {
            statusMarkup = `<span class="status-pill active">Applications Active</span>`;
            countdownMarkup = `<span class="countdown-text safe">${item.metrics.days} days left to apply</span>`;
        } else if (item.metrics.status === "UPCOMING") {
            statusMarkup = `<span class="status-pill upcoming">Opening Soon</span>`;
            countdownMarkup = `<span class="countdown-text warning">Opens in ${item.metrics.days} days</span>`;
        } else {
            statusMarkup = `<span class="status-pill closed">Cycle Closed</span>`;
            countdownMarkup = `<span class="countdown-text neutral">Re-opens Next Cycle</span>`;
        }

        return `
            <div class="card">
                <div>
                    ${statusMarkup}
                    <div class="card-header">
                        <h2 class="card-title">${item.name}</h2>
                        <span class="badge ${item.fullyFunded ? 'badge-full' : 'badge-partial'}">
                            ${item.fullyFunded ? 'Fully Funded' : 'Partial / Grant'}
                        </span>
                    </div>
                    <div class="card-details">
                        <p><strong>Host Country:</strong> ${item.hostCountry}</p>
                        <p><strong>Degree Levels:</strong> ${item.levels.join(', ')}</p>
                        <p><strong>Min GPA Required:</strong> ${item.minGpa.toFixed(2)} / 4.0</p>
                        <p><strong>Benefits:</strong> ${item.coverage}</p>
                    </div>
                </div>
                <div class="card-footer">
                    ${countdownMarkup}
                    <a href="${item.link}" target="_blank" class="btn-apply">Verify Details</a>
                </div>
            </div>
        `;
    }).join('');

    // Pagination Render
    if (perPageVal >= 9999 || totalPages <= 1) {
        paginationBar.innerHTML = "";
    } else {
        let paginationHTML = `<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="window.changeMatrixPage(${currentPage - 1})">Previous</button>`;
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="window.changeMatrixPage(${i})">${i}</button>`;
        }
        paginationHTML += `<button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" ${currentPage === totalPages ? 'disabled' : ''} onclick="window.changeMatrixPage(${currentPage + 1})">Next</button>`;
        paginationBar.innerHTML = paginationHTML;
    }
}

window.changeMatrixPage = function(page) {
    currentPage = page;
    renderMatrix();
    window.scrollTo({ top: 400, behavior: 'smooth' });
};

// Daily Midnight Auto-Update Mechanism
function initMidnightScheduler() {
    const now = new Date();
    const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;
    
    setTimeout(() => {
        updateSyncTimestamp();
        renderMatrix();
        initMidnightScheduler();
    }, millisTillMidnight);
}

document.addEventListener('DOMContentLoaded', () => {
    populateCountries();
    updateSyncTimestamp();
    renderMatrix();
    initMidnightScheduler();

    document.querySelectorAll('.filter-panel select, .filter-panel input, #perPageSelect').forEach(element => {
        element.addEventListener('change', () => { currentPage = 1; renderMatrix(); });
        element.addEventListener('input', () => { currentPage = 1; renderMatrix(); });
    });

    document.querySelectorAll('.tag-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            
            if (filter === "all") {
                activeGenreFilters = ["all"];
                document.querySelectorAll('.tag-pill').forEach(p => p.classList.remove('active'));
                e.target.classList.add('active');
            } else {
                const allPill = document.querySelector('.tag-pill[data-filter="all"]');
                if (allPill) allPill.classList.remove('active');
                
                if (activeGenreFilters.includes("all")) activeGenreFilters = [];

                if (activeGenreFilters.includes(filter)) {
                    activeGenreFilters = activeGenreFilters.filter(f => f !== filter);
                    e.target.classList.remove('active');
                    if (activeGenreFilters.length === 0) {
                        activeGenreFilters = ["all"];
                        if (allPill) allPill.classList.add('active');
                    }
                } else {
                    activeGenreFilters.push(filter);
                    e.target.classList.add('active');
                }
            }
            currentPage = 1;
            renderMatrix();
        });
    });
});
