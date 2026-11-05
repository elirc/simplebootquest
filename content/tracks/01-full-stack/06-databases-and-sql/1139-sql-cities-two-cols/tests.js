test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Lagos","avg_temp":11,"population":755},{"name":"Seoul","avg_temp":14,"population":2308},{"name":"Austin","avg_temp":15,"population":3567},{"name":"Cairo","avg_temp":23,"population":4887},{"name":"Perth","avg_temp":11,"population":6712},{"name":"Turin","avg_temp":2,"population":7148},{"name":"Lima","avg_temp":20,"population":8203},{"name":"Oslo","avg_temp":25,"population":9244},{"name":"Lisbon","avg_temp":2,"population":9395}]);
});
