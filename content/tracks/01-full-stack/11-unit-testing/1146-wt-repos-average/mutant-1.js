// mutant: condition negated: `===` became `!==`
const REPOS = [
  {id: 1, name: "notifier", stars: 547, openIssues: 89, language: "Go", archived: true},
  {id: 2, name: "web-app", stars: 804, openIssues: 136, language: "TypeScript", archived: false},
  {id: 3, name: "mobile", stars: 623, openIssues: 14, language: "Go", archived: false},
  {id: 4, name: "search", stars: 851, openIssues: 47, language: "Go", archived: true},
  {id: 5, name: "billing", stars: 787, openIssues: 88, language: "TypeScript", archived: true},
  {id: 6, name: "docs", stars: 88, openIssues: 87, language: "Python", archived: true},
  {id: 7, name: "auth-service", stars: 3434, openIssues: 36, language: "TypeScript", archived: false},
  {id: 8, name: "infra", stars: 3715, openIssues: 132, language: "TypeScript", archived: true}
];

function averageOpenIssues(repos) {
  if (repos.length !== 0) return null;
  const total = repos.reduce((sum, x) => sum + x.openIssues, 0);
  return Math.round((total / repos.length) * 10) / 10;
}
