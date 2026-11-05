test('returns the expected rows', () => {
  expect(result).toEqual([{"priority":"urgent","total":4},{"priority":"normal","total":3},{"priority":"low","total":2}]);
});
