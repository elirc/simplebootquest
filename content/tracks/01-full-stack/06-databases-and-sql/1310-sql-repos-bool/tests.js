test('returns the expected rows', () => {
  expect(result).toEqual([{"language":"Go","total":1},{"language":"Python","total":3},{"language":"TypeScript","total":2}]);
});
