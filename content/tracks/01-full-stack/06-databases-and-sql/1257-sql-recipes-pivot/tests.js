test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Chili","views":0,"likes":1,"shares":2},{"name":"Curry","views":0,"likes":0,"shares":1},{"name":"Falafel","views":0,"likes":1,"shares":0},{"name":"Lasagne","views":1,"likes":0,"shares":0},{"name":"Pancakes","views":2,"likes":0,"shares":1},{"name":"Shakshuka","views":2,"likes":0,"shares":0},{"name":"Tacos","views":1,"likes":0,"shares":0}]);
});
