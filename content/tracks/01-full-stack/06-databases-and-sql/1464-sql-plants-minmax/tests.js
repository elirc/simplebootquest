test('returns the expected rows', () => {
  expect(result).toEqual([{"light":"bright","min_water_every_days":4,"max_water_every_days":18},{"light":"low","min_water_every_days":6,"max_water_every_days":19},{"light":"medium","min_water_every_days":7,"max_water_every_days":9}]);
});
