const REPOS = [
  {id: 1, name: "design-system", stars: 1118, openIssues: 34, language: "Python", archived: true},
  {id: 2, name: "infra", stars: 513, openIssues: 126, language: "Python", archived: true},
  {id: 3, name: "cli", stars: 3131, openIssues: 101, language: "Go", archived: false},
  {id: 4, name: "docs", stars: 4347, openIssues: 76, language: "Go", archived: false},
  {id: 5, name: "auth-service", stars: 2434, openIssues: 80, language: "Go", archived: true},
  {id: 6, name: "billing", stars: 1490, openIssues: 107, language: "TypeScript", archived: false},
  {id: 7, name: "analytics", stars: 575, openIssues: 39, language: "TypeScript", archived: true},
  {id: 8, name: "mobile", stars: 2501, openIssues: 89, language: "Go", archived: false}
];

test("with 1", () => {
  expect(nthByOpenIssues(REPOS, 1)).toEqual("infra");
});

test("with 2", () => {
  expect(nthByOpenIssues(REPOS, 2)).toEqual("billing");
});

test("with 5", () => {
  expect(nthByOpenIssues(REPOS, 5)).toEqual("auth-service");
});

test("with 0", () => {
  expect(nthByOpenIssues(REPOS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByOpenIssues(REPOS, 99)).toEqual(null);
});
