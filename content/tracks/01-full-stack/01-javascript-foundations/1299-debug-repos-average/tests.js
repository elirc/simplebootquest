const REPOS = [
  {id: 1, name: "auth-service", stars: 1683, openIssues: 46, language: "TypeScript", archived: false},
  {id: 2, name: "docs", stars: 5395, openIssues: 63, language: "Python", archived: true},
  {id: 3, name: "web-app", stars: 2314, openIssues: 49, language: "Python", archived: false},
  {id: 4, name: "infra", stars: 331, openIssues: 131, language: "Python", archived: true},
  {id: 5, name: "mobile", stars: 2100, openIssues: 115, language: "TypeScript", archived: false},
  {id: 6, name: "analytics", stars: 579, openIssues: 88, language: "Python", archived: false},
  {id: 7, name: "billing", stars: 1443, openIssues: 53, language: "TypeScript", archived: true},
  {id: 8, name: "api-gateway", stars: 1262, openIssues: 25, language: "TypeScript", archived: false}
];

test("an empty list", () => {
  expect(averageOpenIssues([])).toEqual(null);
});

test("all repos", () => {
  expect(averageOpenIssues(REPOS)).toEqual(71.3);
});
