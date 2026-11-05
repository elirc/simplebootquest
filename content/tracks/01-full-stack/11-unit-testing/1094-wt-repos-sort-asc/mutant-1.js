// mutant: sort direction reversed
const REPOS = [
  {id: 1, name: "auth-service", stars: 2694, openIssues: 134, language: "TypeScript", archived: false},
  {id: 2, name: "design-system", stars: 2393, openIssues: 62, language: "TypeScript", archived: false},
  {id: 3, name: "notifier", stars: 4710, openIssues: 124, language: "Go", archived: false},
  {id: 4, name: "web-app", stars: 5235, openIssues: 5, language: "Python", archived: true},
  {id: 5, name: "docs", stars: 1559, openIssues: 36, language: "Go", archived: true},
  {id: 6, name: "search", stars: 4782, openIssues: 14, language: "Python", archived: true},
  {id: 7, name: "mobile", stars: 3426, openIssues: 128, language: "Go", archived: true},
  {id: 8, name: "infra", stars: 3514, openIssues: 111, language: "TypeScript", archived: true}
];

function reposByStars(repos) {
  return [...repos].sort((a, b) => b.stars - a.stars).map((x) => x.name);
}
