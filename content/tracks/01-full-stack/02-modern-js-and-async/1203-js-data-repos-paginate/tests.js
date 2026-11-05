const REPOS = [
  {id: 1, name: "analytics", stars: 43, openIssues: 84, language: "Python", archived: false},
  {id: 2, name: "api-gateway", stars: 630, openIssues: 60, language: "Go", archived: false},
  {id: 3, name: "mobile", stars: 2583, openIssues: 103, language: "TypeScript", archived: false},
  {id: 4, name: "search", stars: 3295, openIssues: 92, language: "TypeScript", archived: true},
  {id: 5, name: "design-system", stars: 1260, openIssues: 109, language: "TypeScript", archived: true},
  {id: 6, name: "infra", stars: 2792, openIssues: 25, language: "Python", archived: false},
  {id: 7, name: "web-app", stars: 5034, openIssues: 13, language: "TypeScript", archived: true},
  {id: 8, name: "billing", stars: 748, openIssues: 120, language: "Python", archived: false}
];

test("with 1, 3", () => {
  expect(pageOfRepos(REPOS, 1, 3)).toEqual({"items":["analytics","api-gateway","mobile"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfRepos(REPOS, 2, 3)).toEqual({"items":["search","design-system","infra"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfRepos(REPOS, 3, 3)).toEqual({"items":["web-app","billing"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfRepos(REPOS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
