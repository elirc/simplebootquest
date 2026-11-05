const REPOS = [
  {id: 1, name: "analytics", stars: 1610, openIssues: 68, language: "Python", archived: false},
  {id: 2, name: "infra", stars: 2640, openIssues: 108, language: "Go", archived: true},
  {id: 3, name: "api-gateway", stars: 1520, openIssues: 41, language: "Python", archived: false},
  {id: 4, name: "auth-service", stars: 701, openIssues: 30, language: "TypeScript", archived: false},
  {id: 5, name: "cli", stars: 2099, openIssues: 73, language: "TypeScript", archived: true},
  {id: 6, name: "docs", stars: 933, openIssues: 85, language: "Go", archived: false},
  {id: 7, name: "design-system", stars: 2226, openIssues: 2, language: "TypeScript", archived: false},
  {id: 8, name: "notifier", stars: 4199, openIssues: 87, language: "TypeScript", archived: false}
];

function reposInRange(repos, low, high) {
  return repos.filter((x) => x.stars >= low && x.stars <= high).map((x) => x.name);
}
