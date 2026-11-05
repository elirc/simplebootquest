test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Austin","events":3},{"name":"Cairo","events":2},{"name":"Lagos","events":2},{"name":"Lima","events":2},{"name":"Perth","events":2},{"name":"Oslo","events":1},{"name":"Turin","events":1},{"name":"Lisbon","events":0},{"name":"Seoul","events":0}]);
});
