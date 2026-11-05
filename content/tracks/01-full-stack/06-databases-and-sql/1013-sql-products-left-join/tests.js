test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Headphones","events":3},{"name":"Water Bottle","events":3},{"name":"Monitor Arm","events":2},{"name":"Mouse Pad","events":2},{"name":"Pen Set","events":2},{"name":"Plant Pot","events":2},{"name":"Desk Lamp","events":0},{"name":"Notebook","events":0},{"name":"USB Hub","events":0}]);
});
