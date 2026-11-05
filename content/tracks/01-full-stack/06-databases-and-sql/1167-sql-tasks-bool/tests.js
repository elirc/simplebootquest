test('returns the expected rows', () => {
  expect(result).toEqual([{"assignee":"ada","total":0},{"assignee":"grace","total":1},{"assignee":"linus","total":0}]);
});
