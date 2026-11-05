test('returns the expected rows', () => {
  expect(result).toEqual([{"priority":"low","min_replies":3,"max_replies":4},{"priority":"normal","min_replies":5,"max_replies":9},{"priority":"urgent","min_replies":2,"max_replies":11}]);
});
