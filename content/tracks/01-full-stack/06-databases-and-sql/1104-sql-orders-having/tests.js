test('returns the expected rows', () => {
  expect(result).toEqual([{"status":"paid","total":3},{"status":"pending","total":2},{"status":"shipped","total":3}]);
});
