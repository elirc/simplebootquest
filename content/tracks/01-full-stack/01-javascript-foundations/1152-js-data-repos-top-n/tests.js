const REPOS = [
  {id: 1, name: "notifier", stars: 3607, openIssues: 105, language: "Go", archived: true},
  {id: 2, name: "design-system", stars: 3287, openIssues: 89, language: "Go", archived: false},
  {id: 3, name: "web-app", stars: 4431, openIssues: 130, language: "Python", archived: true},
  {id: 4, name: "cli", stars: 4367, openIssues: 16, language: "Python", archived: false},
  {id: 5, name: "search", stars: 1153, openIssues: 33, language: "Python", archived: true},
  {id: 6, name: "auth-service", stars: 2913, openIssues: 137, language: "Go", archived: true},
  {id: 7, name: "billing", stars: 3002, openIssues: 46, language: "Python", archived: false},
  {id: 8, name: "infra", stars: 1951, openIssues: 118, language: "Python", archived: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(REPOS);
  topReposByStars(REPOS, 1);
  expect(JSON.stringify(REPOS)).toBe(before);
});

test("with 1", () => {
  expect(topReposByStars(REPOS, 1)).toEqual(["web-app"]);
});

test("with 3", () => {
  expect(topReposByStars(REPOS, 3)).toEqual(["web-app","cli","notifier"]);
});

test("with 0", () => {
  expect(topReposByStars(REPOS, 0)).toEqual([]);
});
