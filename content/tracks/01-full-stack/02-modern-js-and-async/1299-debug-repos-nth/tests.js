const REPOS = [
  {id: 1, name: "docs", stars: 5061, openIssues: 35, language: "TypeScript", archived: true},
  {id: 2, name: "cli", stars: 593, openIssues: 33, language: "Go", archived: false},
  {id: 3, name: "mobile", stars: 3009, openIssues: 111, language: "Python", archived: true},
  {id: 4, name: "auth-service", stars: 2920, openIssues: 126, language: "Python", archived: false},
  {id: 5, name: "analytics", stars: 913, openIssues: 92, language: "Python", archived: false},
  {id: 6, name: "notifier", stars: 3683, openIssues: 119, language: "Python", archived: false},
  {id: 7, name: "design-system", stars: 2931, openIssues: 63, language: "TypeScript", archived: false},
  {id: 8, name: "search", stars: 4956, openIssues: 97, language: "Python", archived: true}
];

test("with 1", () => {
  expect(nthByStars(REPOS, 1)).toEqual("docs");
});

test("with 2", () => {
  expect(nthByStars(REPOS, 2)).toEqual("search");
});

test("with 5", () => {
  expect(nthByStars(REPOS, 5)).toEqual("design-system");
});

test("with 0", () => {
  expect(nthByStars(REPOS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByStars(REPOS, 99)).toEqual(null);
});
