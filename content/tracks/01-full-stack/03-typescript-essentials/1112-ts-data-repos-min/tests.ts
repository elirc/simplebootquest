const REPOS = [
  {id: 1, name: "auth-service", stars: 2883, openIssues: 59, language: "Python", archived: false},
  {id: 2, name: "api-gateway", stars: 1584, openIssues: 95, language: "Go", archived: true},
  {id: 3, name: "search", stars: 3390, openIssues: 105, language: "TypeScript", archived: false},
  {id: 4, name: "design-system", stars: 1509, openIssues: 106, language: "TypeScript", archived: true},
  {id: 5, name: "cli", stars: 4533, openIssues: 55, language: "Python", archived: true},
  {id: 6, name: "notifier", stars: 1355, openIssues: 5, language: "Python", archived: false},
  {id: 7, name: "docs", stars: 2762, openIssues: 72, language: "TypeScript", archived: false},
  {id: 8, name: "analytics", stars: 4208, openIssues: 7, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(lowestOpenIssues([])).toEqual(null);
});

test("all repos", () => {
  expect(lowestOpenIssues(REPOS)).toEqual("notifier");
});
