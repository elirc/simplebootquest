const REPOS = [
  {id: 1, name: "web-app", stars: 2658, openIssues: 56, language: "Go", archived: false},
  {id: 2, name: "billing", stars: 73, openIssues: 113, language: "Python", archived: false},
  {id: 3, name: "api-gateway", stars: 179, openIssues: 134, language: "Python", archived: true},
  {id: 4, name: "auth-service", stars: 2962, openIssues: 5, language: "TypeScript", archived: false},
  {id: 5, name: "search", stars: 2552, openIssues: 78, language: "Go", archived: false},
  {id: 6, name: "mobile", stars: 183, openIssues: 90, language: "Go", archived: false},
  {id: 7, name: "docs", stars: 2732, openIssues: 33, language: "Python", archived: false},
  {id: 8, name: "notifier", stars: 735, openIssues: 126, language: "Python", archived: true}
];

test("an empty list", () => {
  expect(countReposPerLanguage([])).toEqual({});
});

test("all repos", () => {
  expect(countReposPerLanguage(REPOS)).toEqual({"Go":3,"Python":4,"TypeScript":1});
});
