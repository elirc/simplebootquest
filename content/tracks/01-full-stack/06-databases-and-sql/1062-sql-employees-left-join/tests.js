test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Dennis","events":3},{"name":"Ada","events":2},{"name":"Katherine","events":2},{"name":"Radia","events":2},{"name":"Tim","events":2},{"name":"Barbara","events":1},{"name":"Margaret","events":1},{"name":"Frances","events":0},{"name":"Ken","events":0}]);
});
