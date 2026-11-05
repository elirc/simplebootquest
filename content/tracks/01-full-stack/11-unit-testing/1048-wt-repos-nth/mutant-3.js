// mutant: off-by-one in the index
const REPOS = [
  {id: 1, name: "docs", stars: 4841, openIssues: 73, language: "TypeScript", archived: true},
  {id: 2, name: "analytics", stars: 3081, openIssues: 107, language: "Python", archived: true},
  {id: 3, name: "cli", stars: 1569, openIssues: 9, language: "TypeScript", archived: true},
  {id: 4, name: "auth-service", stars: 1200, openIssues: 81, language: "Python", archived: true},
  {id: 5, name: "mobile", stars: 4365, openIssues: 91, language: "Python", archived: false},
  {id: 6, name: "web-app", stars: 3329, openIssues: 27, language: "Go", archived: false},
  {id: 7, name: "design-system", stars: 184, openIssues: 84, language: "TypeScript", archived: true},
  {id: 8, name: "api-gateway", stars: 5033, openIssues: 104, language: "Python", archived: false}
];

function nthByStars(repos, n) {
  const sorted = [...repos].sort((a, b) => b.stars - a.stars);
  return n >= 1 && n <= sorted.length ? sorted[n].name : null;
}
