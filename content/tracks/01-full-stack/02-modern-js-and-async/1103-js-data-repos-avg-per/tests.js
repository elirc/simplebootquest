const REPOS = [
  {id: 1, name: "web-app", stars: 3604, openIssues: 25, language: "Python", archived: true},
  {id: 2, name: "search", stars: 33, openIssues: 112, language: "TypeScript", archived: true},
  {id: 3, name: "cli", stars: 3468, openIssues: 54, language: "Python", archived: false},
  {id: 4, name: "notifier", stars: 4800, openIssues: 64, language: "TypeScript", archived: true},
  {id: 5, name: "analytics", stars: 4345, openIssues: 90, language: "TypeScript", archived: true},
  {id: 6, name: "auth-service", stars: 1079, openIssues: 53, language: "Go", archived: false},
  {id: 7, name: "infra", stars: 2690, openIssues: 135, language: "Python", archived: true},
  {id: 8, name: "design-system", stars: 564, openIssues: 5, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(averageOpenIssuesPerLanguage([])).toEqual({});
});

test("all repos", () => {
  expect(averageOpenIssuesPerLanguage(REPOS)).toEqual({"Python":71,"TypeScript":89,"Go":29});
});
