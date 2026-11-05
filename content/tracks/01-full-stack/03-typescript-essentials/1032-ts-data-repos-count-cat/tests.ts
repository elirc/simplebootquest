const REPOS = [
  {id: 1, name: "mobile", stars: 4716, openIssues: 98, language: "Python", archived: true},
  {id: 2, name: "web-app", stars: 3730, openIssues: 57, language: "TypeScript", archived: false},
  {id: 3, name: "auth-service", stars: 5187, openIssues: 57, language: "Go", archived: false},
  {id: 4, name: "api-gateway", stars: 2550, openIssues: 103, language: "Go", archived: true},
  {id: 5, name: "notifier", stars: 3124, openIssues: 133, language: "TypeScript", archived: true},
  {id: 6, name: "cli", stars: 2047, openIssues: 87, language: "TypeScript", archived: true},
  {id: 7, name: "analytics", stars: 3211, openIssues: 100, language: "Go", archived: false},
  {id: 8, name: "infra", stars: 1426, openIssues: 62, language: "Go", archived: false}
];

test("with \"TypeScript\"", () => {
  expect(countReposByLanguage(REPOS, "TypeScript")).toEqual(3);
});

test("with \"Go\"", () => {
  expect(countReposByLanguage(REPOS, "Go")).toEqual(4);
});

test("with \"Python\"", () => {
  expect(countReposByLanguage(REPOS, "Python")).toEqual(1);
});

test("with \"nope\"", () => {
  expect(countReposByLanguage(REPOS, "nope")).toEqual(0);
});
