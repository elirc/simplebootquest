test('returns the expected rows', () => {
  expect(result).toEqual([{"difficulty":"easy","total":4},{"difficulty":"hard","total":3},{"difficulty":"medium","total":2}]);
});
