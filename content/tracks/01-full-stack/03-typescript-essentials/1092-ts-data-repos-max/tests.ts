const REPOS = [
  {id: 1, name: "auth-service", stars: 1124, openIssues: 106, language: "Python", archived: false},
  {id: 2, name: "docs", stars: 2221, openIssues: 71, language: "Go", archived: true},
  {id: 3, name: "mobile", stars: 2267, openIssues: 45, language: "Python", archived: false},
  {id: 4, name: "design-system", stars: 5295, openIssues: 108, language: "TypeScript", archived: true},
  {id: 5, name: "web-app", stars: 5356, openIssues: 2, language: "TypeScript", archived: false},
  {id: 6, name: "api-gateway", stars: 3673, openIssues: 119, language: "TypeScript", archived: true},
  {id: 7, name: "analytics", stars: 1059, openIssues: 91, language: "Python", archived: true},
  {id: 8, name: "billing", stars: 2557, openIssues: 22, language: "Go", archived: true}
];

test("an empty list", () => {
  expect(highestStars([])).toEqual(null);
});

test("all repos", () => {
  expect(highestStars(REPOS)).toEqual("web-app");
});
