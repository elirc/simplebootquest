test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Ada","views":0,"likes":2,"shares":0},{"name":"Barbara","views":0,"likes":1,"shares":0},{"name":"Dennis","views":1,"likes":0,"shares":2},{"name":"Katherine","views":2,"likes":0,"shares":0},{"name":"Margaret","views":1,"likes":0,"shares":0},{"name":"Radia","views":0,"likes":2,"shares":0},{"name":"Tim","views":1,"likes":0,"shares":1}]);
});
