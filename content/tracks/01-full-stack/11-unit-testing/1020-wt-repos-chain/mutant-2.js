// mutant: sort direction reversed
const REPOS = [
  {id: 1, name: "billing", stars: 4853, openIssues: 138, language: "TypeScript", archived: false},
  {id: 2, name: "auth-service", stars: 969, openIssues: 123, language: "Python", archived: false},
  {id: 3, name: "docs", stars: 3168, openIssues: 42, language: "Python", archived: true},
  {id: 4, name: "mobile", stars: 5242, openIssues: 39, language: "TypeScript", archived: true},
  {id: 5, name: "analytics", stars: 316, openIssues: 39, language: "Python", archived: false},
  {id: 6, name: "api-gateway", stars: 2965, openIssues: 6, language: "Python", archived: true},
  {id: 7, name: "cli", stars: 3547, openIssues: 13, language: "Python", archived: true},
  {id: 8, name: "notifier", stars: 519, openIssues: 24, language: "Go", archived: true}
];

function reposInLanguageRanked(repos, value) {
  return repos
    .filter((x) => x.language === value)
    .sort((a, b) => a.stars - b.stars)
    .map((x) => x.name);
}
