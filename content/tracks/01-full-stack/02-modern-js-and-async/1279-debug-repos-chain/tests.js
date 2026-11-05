const REPOS = [
  {id: 1, name: "search", stars: 5061, openIssues: 68, language: "TypeScript", archived: false},
  {id: 2, name: "api-gateway", stars: 1522, openIssues: 75, language: "Python", archived: false},
  {id: 3, name: "analytics", stars: 2327, openIssues: 102, language: "Python", archived: false},
  {id: 4, name: "docs", stars: 400, openIssues: 22, language: "Python", archived: true},
  {id: 5, name: "auth-service", stars: 5382, openIssues: 6, language: "Python", archived: true},
  {id: 6, name: "mobile", stars: 528, openIssues: 75, language: "Go", archived: false},
  {id: 7, name: "notifier", stars: 4178, openIssues: 87, language: "Python", archived: false},
  {id: 8, name: "web-app", stars: 4292, openIssues: 46, language: "TypeScript", archived: true}
];

test("with \"TypeScript\"", () => {
  expect(reposInLanguageRanked(REPOS, "TypeScript")).toEqual(["search","web-app"]);
});

test("with \"Go\"", () => {
  expect(reposInLanguageRanked(REPOS, "Go")).toEqual(["mobile"]);
});

test("with \"Python\"", () => {
  expect(reposInLanguageRanked(REPOS, "Python")).toEqual(["analytics","notifier","api-gateway","docs","auth-service"]);
});
