const BEFORE = [
  {id: 1, name: "api-gateway", stars: 4042, openIssues: 77, language: "TypeScript", archived: true},
  {id: 2, name: "cli", stars: 5051, openIssues: 123, language: "Python", archived: true},
  {id: 3, name: "analytics", stars: 4755, openIssues: 58, language: "TypeScript", archived: false},
  {id: 4, name: "mobile", stars: 1950, openIssues: 76, language: "Go", archived: true},
  {id: 5, name: "web-app", stars: 3969, openIssues: 50, language: "TypeScript", archived: true},
  {id: 6, name: "notifier", stars: 377, openIssues: 69, language: "Go", archived: false},
  {id: 7, name: "auth-service", stars: 2456, openIssues: 63, language: "TypeScript", archived: false},
  {id: 8, name: "docs", stars: 1024, openIssues: 137, language: "Python", archived: false}
];
const AFTER = [
  {id: 1, name: "api-gateway", stars: 4042, openIssues: 77, language: "TypeScript", archived: true},
  {id: 2, name: "cli", stars: 5058, openIssues: 123, language: "Python", archived: true},
  {id: 3, name: "analytics", stars: 4755, openIssues: 58, language: "TypeScript", archived: false},
  {id: 4, name: "mobile", stars: 1950, openIssues: 76, language: "Go", archived: true},
  {id: 5, name: "web-app", stars: 3976, openIssues: 50, language: "TypeScript", archived: true},
  {id: 6, name: "notifier", stars: 377, openIssues: 69, language: "Go", archived: false},
  {id: 7, name: "auth-service", stars: 2456, openIssues: 63, language: "TypeScript", archived: false},
  {id: 8, name: "docs", stars: 1031, openIssues: 137, language: "Python", archived: false}
];

test("finds changed ids", () => {
  expect(starsChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(starsChanges(BEFORE, BEFORE)).toEqual([]);
});
