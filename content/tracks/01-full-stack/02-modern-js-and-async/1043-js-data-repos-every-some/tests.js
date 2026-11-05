const REPOS = [
  {id: 1, name: "infra", stars: 2103, openIssues: 73, language: "Go", archived: false},
  {id: 2, name: "auth-service", stars: 1040, openIssues: 25, language: "TypeScript", archived: false},
  {id: 3, name: "docs", stars: 4316, openIssues: 129, language: "Python", archived: false},
  {id: 4, name: "api-gateway", stars: 3777, openIssues: 40, language: "Go", archived: true},
  {id: 5, name: "mobile", stars: 5174, openIssues: 44, language: "TypeScript", archived: false},
  {id: 6, name: "notifier", stars: 5357, openIssues: 74, language: "Go", archived: true},
  {id: 7, name: "cli", stars: 1051, openIssues: 83, language: "Go", archived: false},
  {id: 8, name: "analytics", stars: 1548, openIssues: 82, language: "TypeScript", archived: true}
];

test("with 1548", () => {
  expect(allReposUnder(REPOS, 1548)).toEqual(false);
});

test("with 5358", () => {
  expect(allReposUnder(REPOS, 5358)).toEqual(true);
});

test("with 5357", () => {
  expect(allReposUnder(REPOS, 5357)).toEqual(false);
});
