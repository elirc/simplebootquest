test('returns the expected rows', () => {
  expect(result).toEqual([{"priority":"low","total":2},{"priority":"normal","total":3},{"priority":"urgent","total":4}]);
});
