const REPOS = [
  {id: 1, name: "auth-service", stars: 4555, openIssues: 12, language: "TypeScript", archived: false},
  {id: 2, name: "search", stars: 2769, openIssues: 85, language: "Go", archived: false},
  {id: 3, name: "design-system", stars: 92, openIssues: 91, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 3255, openIssues: 64, language: "Go", archived: true},
  {id: 5, name: "notifier", stars: 4704, openIssues: 14, language: "TypeScript", archived: false},
  {id: 6, name: "infra", stars: 232, openIssues: 74, language: "TypeScript", archived: true},
  {id: 7, name: "mobile", stars: 4507, openIssues: 26, language: "Python", archived: false},
  {id: 8, name: "billing", stars: 2364, openIssues: 125, language: "Go", archived: true}
];

test("with \"oc\"", () => {
  expect(searchRepos(REPOS, "oc")).toEqual(["docs"]);
});

test("with \"OC\"", () => {
  expect(searchRepos(REPOS, "OC")).toEqual(["docs"]);
});

test("with \"  \"", () => {
  expect(searchRepos(REPOS, "  ")).toEqual(["auth-service","search","design-system","docs","notifier","infra","mobile","billing"]);
});

test("with \"zzz\"", () => {
  expect(searchRepos(REPOS, "zzz")).toEqual([]);
});
