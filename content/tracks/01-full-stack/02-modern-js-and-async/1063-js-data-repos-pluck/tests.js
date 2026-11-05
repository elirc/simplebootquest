const REPOS = [
  {id: 1, name: "web-app", stars: 1866, openIssues: 17, language: "Go", archived: false},
  {id: 2, name: "mobile", stars: 3277, openIssues: 50, language: "Go", archived: false},
  {id: 3, name: "docs", stars: 4178, openIssues: 40, language: "Go", archived: false},
  {id: 4, name: "design-system", stars: 4492, openIssues: 86, language: "Go", archived: true},
  {id: 5, name: "notifier", stars: 4653, openIssues: 131, language: "Go", archived: true},
  {id: 6, name: "cli", stars: 2209, openIssues: 72, language: "TypeScript", archived: true},
  {id: 7, name: "analytics", stars: 1996, openIssues: 24, language: "Python", archived: true},
  {id: 8, name: "api-gateway", stars: 4683, openIssues: 105, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(summariseRepos([])).toEqual([]);
});

test("all repos", () => {
  expect(summariseRepos(REPOS)).toEqual([{"id":1,"name":"web-app","stars":1866},{"id":2,"name":"mobile","stars":3277},{"id":3,"name":"docs","stars":4178},{"id":4,"name":"design-system","stars":4492},{"id":5,"name":"notifier","stars":4653},{"id":6,"name":"cli","stars":2209},{"id":7,"name":"analytics","stars":1996},{"id":8,"name":"api-gateway","stars":4683}]);
});
