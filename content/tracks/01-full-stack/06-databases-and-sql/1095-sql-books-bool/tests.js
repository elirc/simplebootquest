test('returns the expected rows', () => {
  expect(result).toEqual([{"genre":"classic","total":1},{"genre":"fiction","total":0},{"genre":"sci-fi","total":2},{"genre":"tech","total":0}]);
});
