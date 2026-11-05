const REPOS = [
  {id: 1, name: "mobile", stars: 3377, openIssues: 82, language: "Python", archived: false},
  {id: 2, name: "api-gateway", stars: 2082, openIssues: 127, language: "TypeScript", archived: false},
  {id: 3, name: "analytics", stars: 702, openIssues: 33, language: "TypeScript", archived: true},
  {id: 4, name: "infra", stars: 2345, openIssues: 18, language: "TypeScript", archived: false},
  {id: 5, name: "search", stars: 3368, openIssues: 127, language: "Python", archived: true},
  {id: 6, name: "auth-service", stars: 1452, openIssues: 14, language: "Go", archived: true},
  {id: 7, name: "cli", stars: 4976, openIssues: 17, language: "Go", archived: false},
  {id: 8, name: "design-system", stars: 1958, openIssues: 127, language: "Python", archived: false}
];

test("an empty list", () => {
  expect(totalOpenIssues([])).toEqual(0);
});

test("all repos", () => {
  expect(totalOpenIssues(REPOS)).toEqual(545);
});
