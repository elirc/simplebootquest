test('returns the expected rows', () => {
  expect(result).toEqual([{"genre":"sci-fi","min_rating":4.9,"max_rating":7.9},{"genre":"thriller","min_rating":4.5,"max_rating":8.3}]);
});
