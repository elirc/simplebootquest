const REPOS = [
  {id: 1, name: "analytics", stars: 2959, openIssues: 79, language: "TypeScript", archived: true},
  {id: 2, name: "cli", stars: 5148, openIssues: 129, language: "Go", archived: false},
  {id: 3, name: "search", stars: 2298, openIssues: 96, language: "TypeScript", archived: true},
  {id: 4, name: "design-system", stars: 2698, openIssues: 44, language: "Go", archived: false},
  {id: 5, name: "billing", stars: 1104, openIssues: 124, language: "TypeScript", archived: true},
  {id: 6, name: "mobile", stars: 3911, openIssues: 13, language: "TypeScript", archived: false},
  {id: 7, name: "docs", stars: 2778, openIssues: 133, language: "TypeScript", archived: false},
  {id: 8, name: "web-app", stars: 2263, openIssues: 119, language: "Python", archived: false}
];

test("with 79, 119", () => {
  expect(reposInRange(REPOS, 79, 119)).toEqual(["analytics","search","web-app"]);
});

test("with 119, 124", () => {
  expect(reposInRange(REPOS, 119, 124)).toEqual(["billing","web-app"]);
});

test("with 79, 79", () => {
  expect(reposInRange(REPOS, 79, 79)).toEqual(["analytics"]);
});
