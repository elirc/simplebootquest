const REPOS = [
  {id: 1, name: "search", stars: 3173, openIssues: 33, language: "TypeScript", archived: true},
  {id: 2, name: "docs", stars: 2911, openIssues: 131, language: "TypeScript", archived: false},
  {id: 3, name: "analytics", stars: 3313, openIssues: 70, language: "Python", archived: false},
  {id: 4, name: "design-system", stars: 4378, openIssues: 104, language: "Go", archived: true},
  {id: 5, name: "mobile", stars: 2257, openIssues: 90, language: "TypeScript", archived: false},
  {id: 6, name: "auth-service", stars: 243, openIssues: 139, language: "TypeScript", archived: true},
  {id: 7, name: "web-app", stars: 2504, openIssues: 40, language: "Python", archived: false},
  {id: 8, name: "cli", stars: 5338, openIssues: 40, language: "Go", archived: false}
];

test("with 40, 90", () => {
  expect(reposInRange(REPOS, 40, 90)).toEqual(["analytics","mobile","web-app","cli"]);
});

test("with 90, 104", () => {
  expect(reposInRange(REPOS, 90, 104)).toEqual(["design-system","mobile"]);
});

test("with 40, 40", () => {
  expect(reposInRange(REPOS, 40, 40)).toEqual(["web-app","cli"]);
});
