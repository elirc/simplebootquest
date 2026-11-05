const REPOS = [
  {id: 1, name: "billing", stars: 2629, openIssues: 63, language: "TypeScript", archived: false},
  {id: 2, name: "mobile", stars: 1914, openIssues: 8, language: "Go", archived: false},
  {id: 3, name: "infra", stars: 3552, openIssues: 44, language: "Go", archived: true},
  {id: 4, name: "cli", stars: 253, openIssues: 104, language: "Python", archived: false},
  {id: 5, name: "auth-service", stars: 379, openIssues: 138, language: "Python", archived: true},
  {id: 6, name: "design-system", stars: 5061, openIssues: 12, language: "TypeScript", archived: true},
  {id: 7, name: "notifier", stars: 2068, openIssues: 12, language: "TypeScript", archived: true},
  {id: 8, name: "docs", stars: 1708, openIssues: 20, language: "TypeScript", archived: false}
];

test("an empty list", () => {
  expect(distinctLanguages([])).toEqual([]);
});

test("all repos", () => {
  expect(distinctLanguages(REPOS)).toEqual(["Go","Python","TypeScript"]);
});
