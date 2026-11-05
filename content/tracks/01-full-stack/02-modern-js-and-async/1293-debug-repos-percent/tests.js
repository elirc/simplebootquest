const REPOS = [
  {id: 1, name: "web-app", stars: 1954, openIssues: 6, language: "TypeScript", archived: false},
  {id: 2, name: "infra", stars: 2084, openIssues: 26, language: "TypeScript", archived: false},
  {id: 3, name: "analytics", stars: 2798, openIssues: 62, language: "Go", archived: true},
  {id: 4, name: "search", stars: 2147, openIssues: 31, language: "Python", archived: true},
  {id: 5, name: "design-system", stars: 954, openIssues: 98, language: "Python", archived: true},
  {id: 6, name: "cli", stars: 4621, openIssues: 41, language: "Python", archived: false},
  {id: 7, name: "notifier", stars: 5245, openIssues: 93, language: "TypeScript", archived: true},
  {id: 8, name: "billing", stars: 1548, openIssues: 55, language: "TypeScript", archived: false}
];

test("an empty list", () => {
  expect(percentArchived([])).toEqual(0);
});

test("all repos", () => {
  expect(percentArchived(REPOS)).toEqual(50);
});
