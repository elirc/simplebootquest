const REPOS = [
  {id: 1, name: "notifier", stars: 5151, openIssues: 129, language: "Python", archived: false},
  {id: 2, name: "infra", stars: 3778, openIssues: 132, language: "Go", archived: false},
  {id: 3, name: "design-system", stars: 4235, openIssues: 63, language: "Go", archived: true},
  {id: 4, name: "web-app", stars: 1285, openIssues: 81, language: "Go", archived: false},
  {id: 5, name: "auth-service", stars: 4965, openIssues: 66, language: "Python", archived: true},
  {id: 6, name: "search", stars: 3007, openIssues: 101, language: "Python", archived: true},
  {id: 7, name: "docs", stars: 5089, openIssues: 33, language: "Python", archived: false},
  {id: 8, name: "billing", stars: 2236, openIssues: 136, language: "Python", archived: false}
];

test("an empty list", () => {
  expect(percentArchived([])).toEqual(0);
});

test("all repos", () => {
  expect(percentArchived(REPOS)).toEqual(38);
});
