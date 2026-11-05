test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Austin","views":0,"likes":2,"shares":1},{"name":"Cairo","views":2,"likes":0,"shares":0},{"name":"Lagos","views":0,"likes":2,"shares":0},{"name":"Lima","views":1,"likes":1,"shares":0},{"name":"Oslo","views":0,"likes":0,"shares":1},{"name":"Perth","views":0,"likes":2,"shares":0},{"name":"Turin","views":1,"likes":0,"shares":0}]);
});
