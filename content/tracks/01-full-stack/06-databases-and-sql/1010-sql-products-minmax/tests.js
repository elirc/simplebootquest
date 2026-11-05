test('returns the expected rows', () => {
  expect(result).toEqual([{"category":"home","min_stock":2,"max_stock":5},{"category":"office","min_stock":57,"max_stock":57},{"category":"tech","min_stock":12,"max_stock":60}]);
});
