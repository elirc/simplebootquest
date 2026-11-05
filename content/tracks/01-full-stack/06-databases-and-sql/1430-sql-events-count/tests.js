test('returns the expected rows', () => {
  expect(result).toEqual([{"format":"hybrid","total":5},{"format":"in-person","total":2},{"format":"online","total":2}]);
});
