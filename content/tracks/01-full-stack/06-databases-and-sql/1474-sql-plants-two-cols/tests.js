test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Basil","water_every_days":19,"height_cm":11},{"name":"Lavender","water_every_days":18,"height_cm":15},{"name":"Peace Lily","water_every_days":15,"height_cm":20},{"name":"Aloe","water_every_days":4,"height_cm":36},{"name":"Snake Plant","water_every_days":9,"height_cm":58},{"name":"Mint","water_every_days":6,"height_cm":59},{"name":"Cactus","water_every_days":5,"height_cm":74},{"name":"Fern","water_every_days":7,"height_cm":130},{"name":"Ivy","water_every_days":11,"height_cm":151}]);
});
