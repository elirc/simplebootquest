test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Aloe","views":1,"likes":0,"shares":1},{"name":"Basil","views":2,"likes":1,"shares":0},{"name":"Ivy","views":1,"likes":2,"shares":0},{"name":"Lavender","views":2,"likes":0,"shares":1},{"name":"Peace Lily","views":0,"likes":2,"shares":1},{"name":"Snake Plant","views":2,"likes":1,"shares":0}]);
});
