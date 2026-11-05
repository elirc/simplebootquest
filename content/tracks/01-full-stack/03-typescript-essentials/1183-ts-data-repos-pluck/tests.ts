const REPOS = [
  {id: 1, name: "api-gateway", stars: 677, openIssues: 52, language: "Python", archived: true},
  {id: 2, name: "billing", stars: 1498, openIssues: 42, language: "Go", archived: false},
  {id: 3, name: "search", stars: 3296, openIssues: 11, language: "Go", archived: false},
  {id: 4, name: "mobile", stars: 3105, openIssues: 41, language: "TypeScript", archived: true},
  {id: 5, name: "infra", stars: 3801, openIssues: 40, language: "Python", archived: true},
  {id: 6, name: "docs", stars: 2527, openIssues: 100, language: "Go", archived: false},
  {id: 7, name: "cli", stars: 3577, openIssues: 95, language: "Go", archived: true},
  {id: 8, name: "design-system", stars: 4054, openIssues: 126, language: "TypeScript", archived: true}
];

test("an empty list", () => {
  expect(summariseRepos([])).toEqual([]);
});

test("all repos", () => {
  expect(summariseRepos(REPOS)).toEqual([{"id":1,"name":"api-gateway","openIssues":52},{"id":2,"name":"billing","openIssues":42},{"id":3,"name":"search","openIssues":11},{"id":4,"name":"mobile","openIssues":41},{"id":5,"name":"infra","openIssues":40},{"id":6,"name":"docs","openIssues":100},{"id":7,"name":"cli","openIssues":95},{"id":8,"name":"design-system","openIssues":126}]);
});
