test('returns the expected rows', () => {
  expect(result).toEqual([{"category":"fun","min_amount":460,"max_amount":715},{"category":"rent","min_amount":950,"max_amount":950},{"category":"travel","min_amount":-234,"max_amount":999}]);
});
