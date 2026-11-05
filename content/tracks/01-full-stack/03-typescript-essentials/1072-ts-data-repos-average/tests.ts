const REPOS = [
  {id: 1, name: "search", stars: 428, openIssues: 58, language: "Go", archived: false},
  {id: 2, name: "docs", stars: 3295, openIssues: 24, language: "TypeScript", archived: true},
  {id: 3, name: "web-app", stars: 4796, openIssues: 90, language: "Go", archived: true},
  {id: 4, name: "mobile", stars: 441, openIssues: 44, language: "Go", archived: false},
  {id: 5, name: "auth-service", stars: 2876, openIssues: 45, language: "Go", archived: false},
  {id: 6, name: "infra", stars: 1921, openIssues: 106, language: "Python", archived: true},
  {id: 7, name: "api-gateway", stars: 2589, openIssues: 136, language: "TypeScript", archived: false},
  {id: 8, name: "analytics", stars: 1993, openIssues: 139, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(averageStars([])).toEqual(null);
});

test("all repos", () => {
  expect(averageStars(REPOS)).toEqual(2292.4);
});
