const REPOS = [
  {id: 1, name: "notifier", stars: 175, openIssues: 22, language: "TypeScript", archived: true},
  {id: 2, name: "infra", stars: 4420, openIssues: 117, language: "Go", archived: false},
  {id: 3, name: "mobile", stars: 2601, openIssues: 75, language: "TypeScript", archived: false},
  {id: 4, name: "cli", stars: 1558, openIssues: 105, language: "Go", archived: true},
  {id: 5, name: "api-gateway", stars: 5254, openIssues: 139, language: "TypeScript", archived: false},
  {id: 6, name: "analytics", stars: 2462, openIssues: 139, language: "Go", archived: true},
  {id: 7, name: "web-app", stars: 4068, openIssues: 91, language: "Python", archived: false},
  {id: 8, name: "design-system", stars: 1370, openIssues: 61, language: "Python", archived: true}
];

test("an empty list", () => {
  expect(totalOpenIssues([])).toEqual(0);
});

test("all repos", () => {
  expect(totalOpenIssues(REPOS)).toEqual(749);
});
