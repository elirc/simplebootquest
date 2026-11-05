test('returns the expected rows', () => {
  expect(result).toEqual([{"category":"fun","avg_amount":587.5},{"category":"rent","avg_amount":950},{"category":"travel","avg_amount":484.5}]);
});
