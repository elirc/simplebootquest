const REPOS = [
  {id: 1, name: "billing", stars: 190, openIssues: 72, language: "Go", archived: false},
  {id: 2, name: "web-app", stars: 1955, openIssues: 8, language: "Go", archived: true},
  {id: 3, name: "cli", stars: 1656, openIssues: 111, language: "TypeScript", archived: true},
  {id: 4, name: "design-system", stars: 233, openIssues: 66, language: "TypeScript", archived: true},
  {id: 5, name: "api-gateway", stars: 3183, openIssues: 57, language: "Go", archived: true},
  {id: 6, name: "analytics", stars: 2980, openIssues: 52, language: "TypeScript", archived: true},
  {id: 7, name: "docs", stars: 701, openIssues: 42, language: "TypeScript", archived: true},
  {id: 8, name: "notifier", stars: 4266, openIssues: 129, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(highestStars([])).toEqual(null);
});

test("all repos", () => {
  expect(highestStars(REPOS)).toEqual("notifier");
});
