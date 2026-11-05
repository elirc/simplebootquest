// mutant: `Math.ceil` became `Math.floor`
const REPOS = [
  {id: 1, name: "cli", stars: 4663, openIssues: 53, language: "Go", archived: true},
  {id: 2, name: "notifier", stars: 4158, openIssues: 6, language: "TypeScript", archived: false},
  {id: 3, name: "mobile", stars: 5344, openIssues: 65, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 521, openIssues: 5, language: "TypeScript", archived: true},
  {id: 5, name: "search", stars: 2976, openIssues: 120, language: "TypeScript", archived: true},
  {id: 6, name: "infra", stars: 622, openIssues: 106, language: "TypeScript", archived: true},
  {id: 7, name: "web-app", stars: 2237, openIssues: 3, language: "Go", archived: false},
  {id: 8, name: "analytics", stars: 1350, openIssues: 138, language: "TypeScript", archived: true}
];

function pageOfRepos(repos, page, size) {
  const totalPages = Math.floor(repos.length / size);
  const items = repos.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
