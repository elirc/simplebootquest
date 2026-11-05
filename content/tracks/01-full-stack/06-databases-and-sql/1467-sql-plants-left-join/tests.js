test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Basil","events":3},{"name":"Ivy","events":3},{"name":"Lavender","events":3},{"name":"Peace Lily","events":3},{"name":"Snake Plant","events":3},{"name":"Aloe","events":2},{"name":"Cactus","events":0},{"name":"Fern","events":0},{"name":"Mint","events":0}]);
});
