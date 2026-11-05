const REPOS = [
  {id: 1, name: "billing", stars: 4257, openIssues: 24, language: "TypeScript", archived: false},
  {id: 2, name: "api-gateway", stars: 3682, openIssues: 54, language: "Go", archived: true},
  {id: 3, name: "analytics", stars: 3450, openIssues: 56, language: "Python", archived: true},
  {id: 4, name: "web-app", stars: 342, openIssues: 39, language: "Python", archived: true},
  {id: 5, name: "auth-service", stars: 328, openIssues: 88, language: "TypeScript", archived: true},
  {id: 6, name: "cli", stars: 2725, openIssues: 62, language: "TypeScript", archived: true},
  {id: 7, name: "mobile", stars: 4088, openIssues: 109, language: "TypeScript", archived: false},
  {id: 8, name: "design-system", stars: 898, openIssues: 113, language: "Python", archived: true}
];

test("an empty list", () => {
  expect(countReposPerLanguage([])).toEqual({});
});

test("all repos", () => {
  expect(countReposPerLanguage(REPOS)).toEqual({"TypeScript":4,"Go":1,"Python":3});
});
