test('returns the expected rows', () => {
  expect(result).toEqual([{"category":"home","total":2},{"category":"office","total":1},{"category":"tech","total":4}]);
});
