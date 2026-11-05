const REPOS = [
  {id: 1, name: "cli", stars: 1944, openIssues: 7, language: "Python", archived: false},
  {id: 2, name: "search", stars: 4267, openIssues: 56, language: "Go", archived: false},
  {id: 3, name: "web-app", stars: 1641, openIssues: 5, language: "Python", archived: true},
  {id: 4, name: "api-gateway", stars: 886, openIssues: 55, language: "Python", archived: true},
  {id: 5, name: "auth-service", stars: 3375, openIssues: 50, language: "Go", archived: false},
  {id: 6, name: "mobile", stars: 5074, openIssues: 121, language: "Python", archived: false},
  {id: 7, name: "infra", stars: 4949, openIssues: 38, language: "Python", archived: true},
  {id: 8, name: "notifier", stars: 1502, openIssues: 79, language: "Go", archived: false}
];

test("with \"TypeScript\"", () => {
  expect(countReposByLanguage(REPOS, "TypeScript")).toEqual(0);
});

test("with \"Go\"", () => {
  expect(countReposByLanguage(REPOS, "Go")).toEqual(3);
});

test("with \"Python\"", () => {
  expect(countReposByLanguage(REPOS, "Python")).toEqual(5);
});

test("with \"nope\"", () => {
  expect(countReposByLanguage(REPOS, "nope")).toEqual(0);
});
