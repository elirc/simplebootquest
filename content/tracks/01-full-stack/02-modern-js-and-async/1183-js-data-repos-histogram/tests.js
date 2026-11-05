const REPOS = [
  {id: 1, name: "notifier", stars: 2310, openIssues: 118, language: "Go", archived: true},
  {id: 2, name: "billing", stars: 2133, openIssues: 109, language: "Python", archived: true},
  {id: 3, name: "infra", stars: 3272, openIssues: 83, language: "Go", archived: false},
  {id: 4, name: "auth-service", stars: 3783, openIssues: 56, language: "TypeScript", archived: true},
  {id: 5, name: "mobile", stars: 3917, openIssues: 2, language: "Python", archived: true},
  {id: 6, name: "analytics", stars: 2489, openIssues: 61, language: "TypeScript", archived: false},
  {id: 7, name: "search", stars: 2067, openIssues: 20, language: "TypeScript", archived: false},
  {id: 8, name: "api-gateway", stars: 4103, openIssues: 135, language: "Python", archived: true}
];

test("with 1350", () => {
  expect(starsHistogram(REPOS, 1350)).toEqual({"1350":4,"2700":3,"4050":1});
});

test("with 2700", () => {
  expect(starsHistogram(REPOS, 2700)).toEqual({"0":4,"2700":4});
});
