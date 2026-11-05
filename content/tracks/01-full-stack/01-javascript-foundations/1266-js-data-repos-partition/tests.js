const REPOS = [
  {id: 1, name: "design-system", stars: 2228, openIssues: 74, language: "Go", archived: true},
  {id: 2, name: "notifier", stars: 2962, openIssues: 46, language: "TypeScript", archived: true},
  {id: 3, name: "web-app", stars: 867, openIssues: 22, language: "Python", archived: false},
  {id: 4, name: "api-gateway", stars: 3122, openIssues: 50, language: "Go", archived: true},
  {id: 5, name: "infra", stars: 3612, openIssues: 35, language: "TypeScript", archived: true},
  {id: 6, name: "docs", stars: 444, openIssues: 101, language: "TypeScript", archived: true},
  {id: 7, name: "search", stars: 3087, openIssues: 96, language: "TypeScript", archived: true},
  {id: 8, name: "analytics", stars: 3483, openIssues: 95, language: "Python", archived: false}
];

test("an empty list", () => {
  expect(splitReposByArchived([])).toEqual({"yes":[],"no":[]});
});

test("all repos", () => {
  expect(splitReposByArchived(REPOS)).toEqual({"yes":["design-system","notifier","api-gateway","infra","docs","search"],"no":["web-app","analytics"]});
});
