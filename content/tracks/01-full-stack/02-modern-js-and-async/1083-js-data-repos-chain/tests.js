const REPOS = [
  {id: 1, name: "api-gateway", stars: 4189, openIssues: 124, language: "TypeScript", archived: true},
  {id: 2, name: "billing", stars: 605, openIssues: 51, language: "TypeScript", archived: false},
  {id: 3, name: "design-system", stars: 927, openIssues: 97, language: "TypeScript", archived: false},
  {id: 4, name: "infra", stars: 3304, openIssues: 91, language: "TypeScript", archived: false},
  {id: 5, name: "cli", stars: 1532, openIssues: 96, language: "Python", archived: true},
  {id: 6, name: "mobile", stars: 1634, openIssues: 45, language: "Go", archived: false},
  {id: 7, name: "search", stars: 5360, openIssues: 87, language: "Go", archived: false},
  {id: 8, name: "auth-service", stars: 5254, openIssues: 51, language: "Python", archived: true}
];

test("with \"TypeScript\"", () => {
  expect(reposInLanguageRanked(REPOS, "TypeScript")).toEqual(["api-gateway","design-system","infra","billing"]);
});

test("with \"Go\"", () => {
  expect(reposInLanguageRanked(REPOS, "Go")).toEqual(["search","mobile"]);
});

test("with \"Python\"", () => {
  expect(reposInLanguageRanked(REPOS, "Python")).toEqual(["cli","auth-service"]);
});
