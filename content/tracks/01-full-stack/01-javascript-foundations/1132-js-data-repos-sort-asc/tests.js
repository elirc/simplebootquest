const REPOS = [
  {id: 1, name: "infra", stars: 3047, openIssues: 79, language: "Python", archived: false},
  {id: 2, name: "mobile", stars: 3745, openIssues: 60, language: "TypeScript", archived: false},
  {id: 3, name: "docs", stars: 5049, openIssues: 100, language: "TypeScript", archived: true},
  {id: 4, name: "search", stars: 2240, openIssues: 39, language: "Python", archived: false},
  {id: 5, name: "analytics", stars: 23, openIssues: 65, language: "Python", archived: false},
  {id: 6, name: "auth-service", stars: 2894, openIssues: 81, language: "Go", archived: true},
  {id: 7, name: "notifier", stars: 4618, openIssues: 58, language: "Python", archived: false},
  {id: 8, name: "web-app", stars: 1524, openIssues: 63, language: "TypeScript", archived: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(REPOS);
  reposByStars(REPOS);
  expect(JSON.stringify(REPOS)).toBe(before);
});

test("all repos", () => {
  expect(reposByStars(REPOS)).toEqual(["analytics","web-app","search","auth-service","infra","mobile","notifier","docs"]);
});
