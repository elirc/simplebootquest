test('returns the expected rows', () => {
  expect(result).toEqual([{"assignee":"ada","avg_estimate":1},{"assignee":"grace","avg_estimate":6.3},{"assignee":"linus","avg_estimate":10.5}]);
});
