const REPOS = [
  {id: 1, name: "docs", stars: 414, openIssues: 36, language: "Python", archived: true},
  {id: 2, name: "mobile", stars: 5352, openIssues: 119, language: "Go", archived: false},
  {id: 3, name: "notifier", stars: 3748, openIssues: 36, language: "TypeScript", archived: false},
  {id: 4, name: "web-app", stars: 4862, openIssues: 46, language: "Python", archived: true},
  {id: 5, name: "search", stars: 844, openIssues: 8, language: "Go", archived: false},
  {id: 6, name: "cli", stars: 2455, openIssues: 132, language: "TypeScript", archived: false},
  {id: 7, name: "api-gateway", stars: 4339, openIssues: 106, language: "Go", archived: false},
  {id: 8, name: "infra", stars: 2051, openIssues: 70, language: "Go", archived: true}
];

test("an empty list", () => {
  expect(lowestStars([])).toEqual(null);
});

test("all repos", () => {
  expect(lowestStars(REPOS)).toEqual("docs");
});
