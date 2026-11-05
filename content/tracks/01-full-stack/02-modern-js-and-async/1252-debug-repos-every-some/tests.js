const REPOS = [
  {id: 1, name: "notifier", stars: 4492, openIssues: 37, language: "TypeScript", archived: false},
  {id: 2, name: "infra", stars: 2224, openIssues: 47, language: "Python", archived: false},
  {id: 3, name: "analytics", stars: 4875, openIssues: 98, language: "Go", archived: true},
  {id: 4, name: "mobile", stars: 2350, openIssues: 120, language: "Python", archived: true},
  {id: 5, name: "search", stars: 4894, openIssues: 29, language: "Go", archived: false},
  {id: 6, name: "design-system", stars: 832, openIssues: 27, language: "Go", archived: false},
  {id: 7, name: "web-app", stars: 956, openIssues: 110, language: "Go", archived: true},
  {id: 8, name: "billing", stars: 2204, openIssues: 25, language: "Go", archived: false}
];

test("with 2204", () => {
  expect(allReposUnder(REPOS, 2204)).toEqual(false);
});

test("with 4895", () => {
  expect(allReposUnder(REPOS, 4895)).toEqual(true);
});

test("with 4894", () => {
  expect(allReposUnder(REPOS, 4894)).toEqual(false);
});
