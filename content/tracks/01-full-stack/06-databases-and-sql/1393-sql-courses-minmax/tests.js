test('returns the expected rows', () => {
  expect(result).toEqual([{"level":"advanced","min_enrolled":253,"max_enrolled":4204},{"level":"beginner","min_enrolled":2242,"max_enrolled":4034},{"level":"intermediate","min_enrolled":3997,"max_enrolled":4079}]);
});
