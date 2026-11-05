test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Chili","events":3},{"name":"Pancakes","events":3},{"name":"Shakshuka","events":2},{"name":"Curry","events":1},{"name":"Falafel","events":1},{"name":"Lasagne","events":1},{"name":"Tacos","events":1},{"name":"Gyoza","events":0},{"name":"Paella","events":0}]);
});
