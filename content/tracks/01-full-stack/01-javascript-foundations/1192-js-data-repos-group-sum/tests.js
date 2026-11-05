const REPOS = [
  {id: 1, name: "design-system", stars: 1410, openIssues: 73, language: "Python", archived: true},
  {id: 2, name: "cli", stars: 1676, openIssues: 132, language: "Go", archived: true},
  {id: 3, name: "auth-service", stars: 90, openIssues: 40, language: "Go", archived: false},
  {id: 4, name: "search", stars: 181, openIssues: 93, language: "TypeScript", archived: true},
  {id: 5, name: "billing", stars: 5233, openIssues: 114, language: "Python", archived: true},
  {id: 6, name: "api-gateway", stars: 4531, openIssues: 71, language: "Go", archived: true},
  {id: 7, name: "web-app", stars: 164, openIssues: 36, language: "Go", archived: false},
  {id: 8, name: "docs", stars: 4514, openIssues: 36, language: "TypeScript", archived: false}
];

test("an empty list", () => {
  expect(starsPerLanguage([])).toEqual({});
});

test("all repos", () => {
  expect(starsPerLanguage(REPOS)).toEqual({"Python":6643,"Go":6461,"TypeScript":4695});
});
