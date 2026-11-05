test('returns the expected rows', () => {
  expect(result).toEqual([{"course":"data","min_age":19,"max_age":33},{"course":"design","min_age":18,"max_age":31},{"course":"web","min_age":24,"max_age":24}]);
});
