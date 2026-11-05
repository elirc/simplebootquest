test('returns the expected rows', () => {
  expect(result).toEqual([{"priority":"low","avg_replies":3.5},{"priority":"normal","avg_replies":7.3},{"priority":"urgent","avg_replies":6}]);
});
