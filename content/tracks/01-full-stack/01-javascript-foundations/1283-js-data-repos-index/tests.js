const REPOS = [
  {id: 1, name: "search", stars: 1622, openIssues: 54, language: "Go", archived: true},
  {id: 2, name: "docs", stars: 312, openIssues: 11, language: "Go", archived: true},
  {id: 3, name: "infra", stars: 984, openIssues: 8, language: "TypeScript", archived: true},
  {id: 4, name: "auth-service", stars: 4814, openIssues: 19, language: "TypeScript", archived: true},
  {id: 5, name: "api-gateway", stars: 887, openIssues: 136, language: "Python", archived: false},
  {id: 6, name: "notifier", stars: 5051, openIssues: 117, language: "Python", archived: false},
  {id: 7, name: "mobile", stars: 702, openIssues: 95, language: "Python", archived: true},
  {id: 8, name: "design-system", stars: 1905, openIssues: 101, language: "Python", archived: false}
];

test("an empty list", () => {
  expect(reposById([])).toEqual({});
});

test("all repos", () => {
  expect(reposById(REPOS)).toEqual({"1":"search","2":"docs","3":"infra","4":"auth-service","5":"api-gateway","6":"notifier","7":"mobile","8":"design-system"});
});
