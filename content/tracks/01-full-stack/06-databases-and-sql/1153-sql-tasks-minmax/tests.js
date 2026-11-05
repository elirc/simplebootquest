test('returns the expected rows', () => {
  expect(result).toEqual([{"assignee":"ada","min_estimate":1,"max_estimate":1},{"assignee":"grace","min_estimate":3,"max_estimate":14},{"assignee":"linus","min_estimate":9,"max_estimate":12}]);
});
