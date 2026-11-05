test('returns the expected rows', () => {
  expect(result).toEqual([{"category":"home","avg_stock":3.7},{"category":"office","avg_stock":57},{"category":"tech","avg_stock":26}]);
});
