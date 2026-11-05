const REPOS = [
  {id: 1, name: "mobile", stars: 2376, openIssues: 97, language: "Go", archived: true},
  {id: 2, name: "notifier", stars: 1623, openIssues: 45, language: "Go", archived: false},
  {id: 3, name: "billing", stars: 2148, openIssues: 48, language: "Go", archived: true},
  {id: 4, name: "infra", stars: 796, openIssues: 137, language: "Python", archived: true},
  {id: 5, name: "search", stars: 5378, openIssues: 26, language: "TypeScript", archived: true},
  {id: 6, name: "cli", stars: 954, openIssues: 54, language: "Go", archived: true},
  {id: 7, name: "api-gateway", stars: 3470, openIssues: 91, language: "Go", archived: true},
  {id: 8, name: "docs", stars: 4179, openIssues: 32, language: "Python", archived: true}
];

test("an empty list", () => {
  expect(averageOpenIssuesPerLanguage([])).toEqual({});
});

test("all repos", () => {
  expect(averageOpenIssuesPerLanguage(REPOS)).toEqual({"Go":67,"Python":85,"TypeScript":26});
});
