const REPOS = [
  {id: 1, name: "search", stars: 1402, openIssues: 31, language: "TypeScript", archived: true},
  {id: 2, name: "web-app", stars: 3081, openIssues: 9, language: "TypeScript", archived: false},
  {id: 3, name: "analytics", stars: 1482, openIssues: 20, language: "Go", archived: false},
  {id: 4, name: "notifier", stars: 1708, openIssues: 97, language: "TypeScript", archived: false},
  {id: 5, name: "cli", stars: 3953, openIssues: 28, language: "TypeScript", archived: false},
  {id: 6, name: "design-system", stars: 3259, openIssues: 52, language: "TypeScript", archived: false},
  {id: 7, name: "billing", stars: 4051, openIssues: 54, language: "Go", archived: true},
  {id: 8, name: "infra", stars: 19, openIssues: 42, language: "Go", archived: true}
];

test("with 1482", () => {
  expect(reposAbove(REPOS, 1482)).toEqual(["web-app","notifier","cli","design-system","billing"]);
});

test("with 3081", () => {
  expect(reposAbove(REPOS, 3081)).toEqual(["cli","design-system","billing"]);
});

test("with 999999", () => {
  expect(reposAbove(REPOS, 999999)).toEqual([]);
});
