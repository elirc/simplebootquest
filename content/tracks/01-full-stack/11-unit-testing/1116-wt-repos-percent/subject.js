const REPOS = [
  {id: 1, name: "analytics", stars: 1440, openIssues: 128, language: "Python", archived: true},
  {id: 2, name: "cli", stars: 4407, openIssues: 105, language: "TypeScript", archived: true},
  {id: 3, name: "infra", stars: 3067, openIssues: 68, language: "TypeScript", archived: false},
  {id: 4, name: "api-gateway", stars: 4648, openIssues: 1, language: "TypeScript", archived: true},
  {id: 5, name: "mobile", stars: 3537, openIssues: 9, language: "TypeScript", archived: true},
  {id: 6, name: "docs", stars: 3812, openIssues: 49, language: "Go", archived: true},
  {id: 7, name: "search", stars: 1545, openIssues: 20, language: "Go", archived: true},
  {id: 8, name: "auth-service", stars: 1438, openIssues: 48, language: "Go", archived: false}
];

function percentArchived(repos) {
  if (repos.length === 0) return 0;
  return Math.round((repos.filter((x) => x.archived).length / repos.length) * 100);
}
