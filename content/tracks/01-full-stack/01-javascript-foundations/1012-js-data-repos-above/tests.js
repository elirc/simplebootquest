const REPOS = [
  {id: 1, name: "docs", stars: 2442, openIssues: 42, language: "Go", archived: false},
  {id: 2, name: "infra", stars: 4259, openIssues: 128, language: "Python", archived: true},
  {id: 3, name: "design-system", stars: 1850, openIssues: 99, language: "Python", archived: true},
  {id: 4, name: "search", stars: 2051, openIssues: 109, language: "TypeScript", archived: false},
  {id: 5, name: "api-gateway", stars: 2200, openIssues: 39, language: "TypeScript", archived: true},
  {id: 6, name: "billing", stars: 4971, openIssues: 16, language: "TypeScript", archived: false},
  {id: 7, name: "cli", stars: 4448, openIssues: 62, language: "Python", archived: true},
  {id: 8, name: "notifier", stars: 653, openIssues: 65, language: "Go", archived: false}
];

test("with 2051", () => {
  expect(reposAbove(REPOS, 2051)).toEqual(["docs","infra","api-gateway","billing","cli"]);
});

test("with 2442", () => {
  expect(reposAbove(REPOS, 2442)).toEqual(["infra","billing","cli"]);
});

test("with 999999", () => {
  expect(reposAbove(REPOS, 999999)).toEqual([]);
});
