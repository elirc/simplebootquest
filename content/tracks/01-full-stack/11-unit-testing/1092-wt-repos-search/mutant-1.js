// mutant: search became case-sensitive
const REPOS = [
  {id: 1, name: "notifier", stars: 471, openIssues: 92, language: "Go", archived: false},
  {id: 2, name: "billing", stars: 3282, openIssues: 1, language: "TypeScript", archived: true},
  {id: 3, name: "api-gateway", stars: 4952, openIssues: 72, language: "Go", archived: true},
  {id: 4, name: "docs", stars: 3102, openIssues: 125, language: "Go", archived: true},
  {id: 5, name: "mobile", stars: 2576, openIssues: 14, language: "Go", archived: false},
  {id: 6, name: "design-system", stars: 2213, openIssues: 75, language: "Python", archived: true},
  {id: 7, name: "web-app", stars: 1983, openIssues: 12, language: "Go", archived: false},
  {id: 8, name: "auth-service", stars: 4653, openIssues: 127, language: "Go", archived: false}
];

function searchRepos(repos, query) {
  const q = query.trim();
  return repos.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
