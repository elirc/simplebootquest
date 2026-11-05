test('returns the expected rows', () => {
  expect(result).toEqual([{"format":"hybrid","min_registered":37,"max_registered":339},{"format":"in-person","min_registered":46,"max_registered":247},{"format":"online","min_registered":108,"max_registered":354}]);
});
