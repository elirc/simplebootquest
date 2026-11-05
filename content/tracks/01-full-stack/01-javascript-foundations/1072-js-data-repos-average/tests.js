const REPOS = [
  {id: 1, name: "search", stars: 2278, openIssues: 128, language: "Go", archived: true},
  {id: 2, name: "notifier", stars: 4827, openIssues: 14, language: "Go", archived: false},
  {id: 3, name: "auth-service", stars: 4057, openIssues: 63, language: "TypeScript", archived: false},
  {id: 4, name: "analytics", stars: 3905, openIssues: 8, language: "Go", archived: false},
  {id: 5, name: "mobile", stars: 4137, openIssues: 72, language: "Go", archived: true},
  {id: 6, name: "billing", stars: 1103, openIssues: 99, language: "Python", archived: false},
  {id: 7, name: "web-app", stars: 2328, openIssues: 96, language: "TypeScript", archived: false},
  {id: 8, name: "cli", stars: 1602, openIssues: 126, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(averageOpenIssues([])).toEqual(null);
});

test("all repos", () => {
  expect(averageOpenIssues(REPOS)).toEqual(75.8);
});
