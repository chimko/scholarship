export const ALL_COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saudi Arabia", "Senegal", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka",
    "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uzbekistan", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Master Scholarship Bank
export const MASTER_DATABASE = [
    { id: "csc-type-a", name: "Chinese Government Scholarship (CSC Type A)", hostCountry: "China", eligibleOrigins: ["ALL"], levels: ["Undergraduate", "Postgraduate", "PhD"], disciplines: ["STEM", "Social Sciences", "Business & Economics"], minGpa: 2.80, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "Full Tuition + Accommodation + Stipend", openingDate: "2026-06-01", deadline: "2026-10-31", nextCycleOpening: "2027-06-01", link: "https://www.campuschina.org/" },
    { id: "rhodes-uk", name: "Rhodes Scholarship", hostCountry: "United Kingdom", eligibleOrigins: ["ALL"], levels: ["Postgraduate", "PhD"], disciplines: ["Humanities & Literature", "Social Sciences", "STEM"], minGpa: 3.70, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "100% Tuition + Living Stipend + Flight", openingDate: "2026-06-01", deadline: "2026-10-01", nextCycleOpening: "2027-06-01", link: "https://www.rhodeshouse.ox.ac.uk/" },
    { id: "gks-kr", name: "Global Korea Scholarship (GKS)", hostCountry: "South Korea", eligibleOrigins: ["ALL"], levels: ["Undergraduate", "Postgraduate"], disciplines: ["STEM", "Business & Economics", "Humanities & Literature"], minGpa: 3.20, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "Tuition + Monthly Allowance + Language Training", openingDate: "2026-05-01", deadline: "2026-09-30", nextCycleOpening: "2027-02-01", link: "https://www.studyinkorea.go.kr/" },
    { id: "fulbright-us", name: "Fulbright Foreign Student Program", hostCountry: "United States", eligibleOrigins: ["ALL"], levels: ["Postgraduate", "PhD"], disciplines: ["STEM", "Social Sciences", "Business & Economics"], minGpa: 3.50, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "Full Tuition + Insurance + Stipend + Airfare", openingDate: "2026-02-01", deadline: "2026-10-15", nextCycleOpening: "2027-02-01", link: "https://fulbrightonline.org/" },
    { id: "erasmus-eu", name: "Erasmus Mundus Joint Masters", hostCountry: "Europe (Multi-Country)", eligibleOrigins: ["ALL"], levels: ["Postgraduate"], disciplines: ["Humanities & Literature", "Social Sciences", "STEM"], minGpa: 3.00, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "Full Tuition + €1,400/mo Allowance + Travel", openingDate: "2026-06-01", deadline: "2027-01-15", nextCycleOpening: "2026-10-01", link: "https://erasmus-plus.ec.europa.eu/" },
    { id: "daad-de", name: "DAAD EPOS Master's Scholarship", hostCountry: "Germany", eligibleOrigins: ["ALL"], levels: ["Postgraduate", "PhD"], disciplines: ["Social Sciences", "STEM", "Business & Economics"], minGpa: 3.00, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "€934/mo Stipend + Insurance + Travel", openingDate: "2026-06-01", deadline: "2026-10-31", nextCycleOpening: "2026-08-01", link: "https://www.daad.de/" },
    { id: "mext-jp", name: "MEXT Japanese Government Scholarship", hostCountry: "Japan", eligibleOrigins: ["ALL"], levels: ["Undergraduate", "Postgraduate", "PhD"], disciplines: ["STEM", "Humanities & Literature"], minGpa: 3.10, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "Tuition Exemption + ¥117,000/mo Stipend", openingDate: "2026-04-15", deadline: "2026-11-30", nextCycleOpening: "2027-04-15", link: "https://www.mext.go.jp/" },
    { id: "turkiye-tr", name: "Türkiye Bursları Scholarship", hostCountry: "Turkey", eligibleOrigins: ["ALL"], levels: ["Undergraduate", "Postgraduate", "PhD"], disciplines: ["Humanities & Literature", "Social Sciences", "STEM", "Medical & Life Sciences"], minGpa: 2.80, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "Tuition + Accommodation + Monthly Allowance", openingDate: "2026-01-10", deadline: "2026-11-20", nextCycleOpening: "2027-01-10", link: "https://www.turkiyeburslari.gov.tr/" },
    { id: "singa-sg", name: "SINGA Singapore Graduate Award", hostCountry: "Singapore", eligibleOrigins: ["ALL"], levels: ["PhD"], disciplines: ["STEM", "Medical & Life Sciences"], minGpa: 3.40, fullyFunded: true, fundingType: "fully-funded", category: "university", coverage: "Full PhD Tuition + SGD 2,700/mo Stipend + Airfare", openingDate: "2026-06-01", deadline: "2026-12-01", nextCycleOpening: "2026-09-01", link: "https://www.a-star.edu.sg/singa" },
    { id: "chevening-uk", name: "Chevening Scholarship", hostCountry: "United Kingdom", eligibleOrigins: ["ALL"], levels: ["Postgraduate"], disciplines: ["Social Sciences", "Business & Economics"], minGpa: 2.80, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "Full Tuition + Living Allowance + Flights", openingDate: "2026-06-12", deadline: "2026-11-03", nextCycleOpening: "2026-09-12", link: "https://www.chevening.org/" },
    { id: "switzerland-excellence", name: "Swiss Government Excellence Scholarships", hostCountry: "Switzerland", eligibleOrigins: ["ALL"], levels: ["Postgraduate", "PhD"], disciplines: ["STEM", "Humanities & Literature", "Medical & Life Sciences"], minGpa: 3.50, fullyFunded: true, fundingType: "fully-funded", category: "government", coverage: "CHF 1,920/mo Allowance + Tuition Exemption", openingDate: "2026-06-10", deadline: "2026-11-15", nextCycleOpening: "2026-08-10", link: "https://www.sbfi.admin.ch/" },
    { id: "holland-scholarship", name: "NL Scholarship", hostCountry: "Netherlands", eligibleOrigins: ["ALL"], levels: ["Undergraduate", "Postgraduate"], disciplines: ["STEM", "Business & Economics"], minGpa: 3.00, fullyFunded: false, fundingType: "partial", category: "government", coverage: "€5,000 One-time Financial Grant", openingDate: "2026-06-01", deadline: "2027-05-01", nextCycleOpening: "2026-11-01", link: "https://www.studyinnl.org/" }
];

// Programmatically scale up to 120+ active items so pagination scales across 10+ pages
const countriesList = ["China", "United Kingdom", "United States", "South Korea", "Germany", "Japan", "Canada", "Australia", "Turkey", "France", "Italy", "Sweden", "Netherlands", "Switzerland", "Singapore"];
const degreeLevels = [["Undergraduate"], ["Postgraduate"], ["PhD"], ["Undergraduate", "Postgraduate"], ["Postgraduate", "PhD"]];
const fields = ["STEM", "Social Sciences", "Business & Economics", "Humanities & Literature", "Medical & Life Sciences"];

for (let i = 1; i <= 120; i++) {
    const country = countriesList[i % countriesList.length];
    MASTER_DATABASE.push({
        id: `global-gen-${i}`,
        name: `${country} Global Academic Excellence Grant #${i}`,
        hostCountry: country,
        eligibleOrigins: ["ALL"],
        levels: degreeLevels[i % degreeLevels.length],
        disciplines: [fields[i % fields.length]],
        minGpa: parseFloat((2.5 + (i % 10) * 0.1).toFixed(2)),
        fullyFunded: i % 3 !== 0,
        fundingType: i % 3 !== 0 ? "fully-funded" : "partial",
        category: i % 2 === 0 ? "government" : "university",
        coverage: i % 3 !== 0 ? "Full Tuition + Monthly Stipend + Accommodation" : "Partial Tuition Waiver + Research Grant",
        openingDate: "2026-06-01",
        deadline: "2026-11-30",
        nextCycleOpening: "2027-06-01",
        link: "https://www.education.gov"
    });
}
