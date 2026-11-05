test('returns the expected rows', () => {
  expect(result).toEqual([{"genre":"sci-fi","total":4},{"genre":"tech","total":3},{"genre":"classic","total":1},{"genre":"fiction","total":1}]);
});
