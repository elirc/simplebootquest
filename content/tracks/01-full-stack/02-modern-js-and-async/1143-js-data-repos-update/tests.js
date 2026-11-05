const REPOS = [
  {id: 1, name: "web-app", stars: 5310, openIssues: 95, language: "Go", archived: false},
  {id: 2, name: "analytics", stars: 1323, openIssues: 72, language: "TypeScript", archived: false},
  {id: 3, name: "notifier", stars: 1700, openIssues: 130, language: "Go", archived: true},
  {id: 4, name: "docs", stars: 1279, openIssues: 76, language: "Python", archived: true},
  {id: 5, name: "infra", stars: 1628, openIssues: 129, language: "Python", archived: false},
  {id: 6, name: "api-gateway", stars: 5011, openIssues: 107, language: "Go", archived: true},
  {id: 7, name: "design-system", stars: 1729, openIssues: 76, language: "Python", archived: true},
  {id: 8, name: "auth-service", stars: 3226, openIssues: 127, language: "TypeScript", archived: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(REPOS);
  bumpStars(REPOS, "TypeScript", 10);
  expect(JSON.stringify(REPOS)).toBe(before);
});

test("with \"TypeScript\", 10", () => {
  expect(bumpStars(REPOS, "TypeScript", 10)).toEqual([{"id":1,"name":"web-app","stars":5310,"openIssues":95,"language":"Go","archived":false},{"id":2,"name":"analytics","stars":1333,"openIssues":72,"language":"TypeScript","archived":false},{"id":3,"name":"notifier","stars":1700,"openIssues":130,"language":"Go","archived":true},{"id":4,"name":"docs","stars":1279,"openIssues":76,"language":"Python","archived":true},{"id":5,"name":"infra","stars":1628,"openIssues":129,"language":"Python","archived":false},{"id":6,"name":"api-gateway","stars":5011,"openIssues":107,"language":"Go","archived":true},{"id":7,"name":"design-system","stars":1729,"openIssues":76,"language":"Python","archived":true},{"id":8,"name":"auth-service","stars":3236,"openIssues":127,"language":"TypeScript","archived":true}]);
});

test("with \"Go\", 1", () => {
  expect(bumpStars(REPOS, "Go", 1)).toEqual([{"id":1,"name":"web-app","stars":5311,"openIssues":95,"language":"Go","archived":false},{"id":2,"name":"analytics","stars":1323,"openIssues":72,"language":"TypeScript","archived":false},{"id":3,"name":"notifier","stars":1701,"openIssues":130,"language":"Go","archived":true},{"id":4,"name":"docs","stars":1279,"openIssues":76,"language":"Python","archived":true},{"id":5,"name":"infra","stars":1628,"openIssues":129,"language":"Python","archived":false},{"id":6,"name":"api-gateway","stars":5012,"openIssues":107,"language":"Go","archived":true},{"id":7,"name":"design-system","stars":1729,"openIssues":76,"language":"Python","archived":true},{"id":8,"name":"auth-service","stars":3226,"openIssues":127,"language":"TypeScript","archived":true}]);
});
