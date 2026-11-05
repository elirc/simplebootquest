test('returns the expected rows', () => {
  expect(result).toEqual([{"assignee":"grace","total":4},{"assignee":"linus","total":4},{"assignee":"ada","total":1}]);
});
