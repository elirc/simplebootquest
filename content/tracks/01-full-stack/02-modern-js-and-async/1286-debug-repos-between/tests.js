const REPOS = [
  {id: 1, name: "web-app", stars: 434, openIssues: 80, language: "TypeScript", archived: false},
  {id: 2, name: "billing", stars: 933, openIssues: 44, language: "Python", archived: false},
  {id: 3, name: "design-system", stars: 734, openIssues: 102, language: "Python", archived: false},
  {id: 4, name: "infra", stars: 1496, openIssues: 69, language: "TypeScript", archived: false},
  {id: 5, name: "mobile", stars: 2877, openIssues: 35, language: "Python", archived: false},
  {id: 6, name: "auth-service", stars: 586, openIssues: 136, language: "Go", archived: false},
  {id: 7, name: "notifier", stars: 1587, openIssues: 39, language: "TypeScript", archived: true},
  {id: 8, name: "api-gateway", stars: 4172, openIssues: 84, language: "TypeScript", archived: false}
];

test("with 734, 1496", () => {
  expect(reposInRange(REPOS, 734, 1496)).toEqual(["billing","design-system","infra"]);
});

test("with 1496, 1587", () => {
  expect(reposInRange(REPOS, 1496, 1587)).toEqual(["infra","notifier"]);
});

test("with 734, 734", () => {
  expect(reposInRange(REPOS, 734, 734)).toEqual(["design-system"]);
});
