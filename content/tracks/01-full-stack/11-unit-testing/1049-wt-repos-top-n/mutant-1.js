// mutant: sort direction reversed
const REPOS = [
  {id: 1, name: "cli", stars: 2001, openIssues: 103, language: "TypeScript", archived: true},
  {id: 2, name: "analytics", stars: 267, openIssues: 39, language: "Python", archived: true},
  {id: 3, name: "web-app", stars: 1529, openIssues: 24, language: "Go", archived: false},
  {id: 4, name: "search", stars: 5141, openIssues: 125, language: "Go", archived: true},
  {id: 5, name: "notifier", stars: 542, openIssues: 70, language: "Go", archived: true},
  {id: 6, name: "infra", stars: 495, openIssues: 37, language: "Go", archived: false},
  {id: 7, name: "auth-service", stars: 5110, openIssues: 42, language: "Python", archived: false},
  {id: 8, name: "mobile", stars: 2779, openIssues: 47, language: "TypeScript", archived: true}
];

function topReposByStars(repos, n) {
  return [...repos].sort((a, b) => a.stars - b.stars).slice(0, n).map((x) => x.name);
}
