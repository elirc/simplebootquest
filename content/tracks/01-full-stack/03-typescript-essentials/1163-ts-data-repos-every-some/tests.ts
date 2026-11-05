const REPOS = [
  {id: 1, name: "infra", stars: 1820, openIssues: 91, language: "TypeScript", archived: true},
  {id: 2, name: "api-gateway", stars: 437, openIssues: 52, language: "Python", archived: false},
  {id: 3, name: "mobile", stars: 3814, openIssues: 55, language: "Python", archived: true},
  {id: 4, name: "web-app", stars: 2103, openIssues: 21, language: "TypeScript", archived: false},
  {id: 5, name: "cli", stars: 3881, openIssues: 80, language: "TypeScript", archived: true},
  {id: 6, name: "search", stars: 4080, openIssues: 101, language: "Python", archived: true},
  {id: 7, name: "design-system", stars: 787, openIssues: 125, language: "Python", archived: true},
  {id: 8, name: "docs", stars: 4517, openIssues: 59, language: "Python", archived: true}
];

test("with 1820", () => {
  expect(allReposUnder(REPOS, 1820)).toEqual(false);
});

test("with 4518", () => {
  expect(allReposUnder(REPOS, 4518)).toEqual(true);
});

test("with 4517", () => {
  expect(allReposUnder(REPOS, 4517)).toEqual(false);
});
