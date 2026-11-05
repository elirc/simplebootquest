test('returns the expected rows', () => {
  expect(result).toEqual([{"language":"Go","avg_open_issues":73},{"language":"Python","avg_open_issues":83.7},{"language":"TypeScript","avg_open_issues":107.3}]);
});
