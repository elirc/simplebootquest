const REPOS = [
  {id: 1, name: "analytics", stars: 2065, openIssues: 97, language: "Python", archived: true},
  {id: 2, name: "auth-service", stars: 3195, openIssues: 28, language: "Python", archived: false},
  {id: 3, name: "cli", stars: 643, openIssues: 19, language: "Python", archived: false},
  {id: 4, name: "mobile", stars: 4332, openIssues: 21, language: "Go", archived: true},
  {id: 5, name: "search", stars: 3368, openIssues: 35, language: "Go", archived: false},
  {id: 6, name: "docs", stars: 3659, openIssues: 73, language: "TypeScript", archived: true},
  {id: 7, name: "design-system", stars: 2230, openIssues: 116, language: "Python", archived: true},
  {id: 8, name: "infra", stars: 1450, openIssues: 96, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(percentArchived([])).toEqual(0);
});

test("all repos", () => {
  expect(percentArchived(REPOS)).toEqual(50);
});
