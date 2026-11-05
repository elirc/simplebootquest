test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Headphones","views":0,"likes":1,"shares":2},{"name":"Monitor Arm","views":2,"likes":0,"shares":0},{"name":"Mouse Pad","views":0,"likes":0,"shares":2},{"name":"Pen Set","views":0,"likes":1,"shares":1},{"name":"Plant Pot","views":1,"likes":1,"shares":0},{"name":"Water Bottle","views":0,"likes":3,"shares":0}]);
});
