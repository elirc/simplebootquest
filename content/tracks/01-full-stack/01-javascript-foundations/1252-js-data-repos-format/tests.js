const REPOS = [
  {id: 1, name: "cli", stars: 2492, openIssues: 39, language: "TypeScript", archived: true},
  {id: 2, name: "web-app", stars: 3211, openIssues: 50, language: "TypeScript", archived: true},
  {id: 3, name: "search", stars: 2883, openIssues: 44, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 111, openIssues: 94, language: "TypeScript", archived: true},
  {id: 5, name: "analytics", stars: 4326, openIssues: 94, language: "TypeScript", archived: true},
  {id: 6, name: "billing", stars: 473, openIssues: 116, language: "Python", archived: true},
  {id: 7, name: "api-gateway", stars: 2746, openIssues: 22, language: "TypeScript", archived: false},
  {id: 8, name: "mobile", stars: 2466, openIssues: 58, language: "Go", archived: false}
];

test("an empty list", () => {
  expect(describeRepos([])).toEqual([]);
});

test("all repos", () => {
  expect(describeRepos(REPOS)).toEqual(["cli (2492)","web-app (3211)","search (2883)","docs (111)","analytics (4326)","billing (473)","api-gateway (2746)","mobile (2466)"]);
});
