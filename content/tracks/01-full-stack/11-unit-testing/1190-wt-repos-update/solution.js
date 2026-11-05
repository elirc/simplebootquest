test('does not mutate the input', () => {
  const before = JSON.stringify(REPOS);
  bumpStars(REPOS, "TypeScript", 10);
  expect(JSON.stringify(REPOS)).toBe(before);
});

test("with \"TypeScript\", 10", () => {
  expect(bumpStars(REPOS, "TypeScript", 10)).toEqual([{"id":1,"name":"analytics","stars":4437,"openIssues":103,"language":"Python","archived":false},{"id":2,"name":"design-system","stars":3304,"openIssues":129,"language":"Go","archived":true},{"id":3,"name":"cli","stars":4109,"openIssues":129,"language":"Python","archived":true},{"id":4,"name":"search","stars":2338,"openIssues":7,"language":"Python","archived":false},{"id":5,"name":"billing","stars":1935,"openIssues":11,"language":"TypeScript","archived":false},{"id":6,"name":"api-gateway","stars":3191,"openIssues":16,"language":"Go","archived":true},{"id":7,"name":"docs","stars":1342,"openIssues":0,"language":"TypeScript","archived":true},{"id":8,"name":"notifier","stars":572,"openIssues":88,"language":"Go","archived":false}]);
});

test("with \"Go\", 1", () => {
  expect(bumpStars(REPOS, "Go", 1)).toEqual([{"id":1,"name":"analytics","stars":4437,"openIssues":103,"language":"Python","archived":false},{"id":2,"name":"design-system","stars":3305,"openIssues":129,"language":"Go","archived":true},{"id":3,"name":"cli","stars":4109,"openIssues":129,"language":"Python","archived":true},{"id":4,"name":"search","stars":2338,"openIssues":7,"language":"Python","archived":false},{"id":5,"name":"billing","stars":1925,"openIssues":11,"language":"TypeScript","archived":false},{"id":6,"name":"api-gateway","stars":3192,"openIssues":16,"language":"Go","archived":true},{"id":7,"name":"docs","stars":1332,"openIssues":0,"language":"TypeScript","archived":true},{"id":8,"name":"notifier","stars":573,"openIssues":88,"language":"Go","archived":false}]);
});
