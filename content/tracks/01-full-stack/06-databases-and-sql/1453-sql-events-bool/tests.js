test('returns the expected rows', () => {
  expect(result).toEqual([{"format":"hybrid","total":3},{"format":"in-person","total":1},{"format":"online","total":1}]);
});
