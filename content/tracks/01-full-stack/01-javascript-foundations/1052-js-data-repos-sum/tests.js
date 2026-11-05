const REPOS = [
  {id: 1, name: "web-app", stars: 278, openIssues: 26, language: "TypeScript", archived: true},
  {id: 2, name: "infra", stars: 1759, openIssues: 64, language: "Python", archived: true},
  {id: 3, name: "auth-service", stars: 5237, openIssues: 1, language: "Python", archived: true},
  {id: 4, name: "billing", stars: 236, openIssues: 49, language: "TypeScript", archived: true},
  {id: 5, name: "search", stars: 89, openIssues: 13, language: "Go", archived: false},
  {id: 6, name: "design-system", stars: 338, openIssues: 5, language: "Python", archived: true},
  {id: 7, name: "api-gateway", stars: 883, openIssues: 3, language: "TypeScript", archived: true},
  {id: 8, name: "analytics", stars: 3846, openIssues: 83, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(totalOpenIssues([])).toEqual(0);
});

test("all repos", () => {
  expect(totalOpenIssues(REPOS)).toEqual(244);
});
