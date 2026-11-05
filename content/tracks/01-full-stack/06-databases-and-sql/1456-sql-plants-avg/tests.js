test('returns the expected rows', () => {
  expect(result).toEqual([{"light":"bright","avg_water_every_days":9},{"light":"low","avg_water_every_days":12.8},{"light":"medium","avg_water_every_days":8}]);
});
