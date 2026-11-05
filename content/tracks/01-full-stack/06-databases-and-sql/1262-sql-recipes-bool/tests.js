test('returns the expected rows', () => {
  expect(result).toEqual([{"difficulty":"easy","total":2},{"difficulty":"hard","total":2},{"difficulty":"medium","total":0}]);
});
