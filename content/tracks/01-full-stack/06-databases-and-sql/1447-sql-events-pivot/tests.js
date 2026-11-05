test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"AI Panel","views":0,"likes":1,"shares":0},{"name":"Demo Day","views":0,"likes":1,"shares":1},{"name":"Open Mic","views":3,"likes":0,"shares":0},{"name":"Startup Night","views":1,"likes":0,"shares":1},{"name":"Workshop","views":1,"likes":0,"shares":1}]);
});
