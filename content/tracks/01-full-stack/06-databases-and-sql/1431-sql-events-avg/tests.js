test('returns the expected rows', () => {
  expect(result).toEqual([{"format":"hybrid","avg_registered":174.2},{"format":"in-person","avg_registered":146.5},{"format":"online","avg_registered":231}]);
});
