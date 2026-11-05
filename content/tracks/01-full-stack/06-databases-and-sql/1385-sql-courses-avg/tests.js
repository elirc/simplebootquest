test('returns the expected rows', () => {
  expect(result).toEqual([{"level":"advanced","avg_enrolled":1790},{"level":"beginner","avg_enrolled":2914.3},{"level":"intermediate","avg_enrolled":4038}]);
});
