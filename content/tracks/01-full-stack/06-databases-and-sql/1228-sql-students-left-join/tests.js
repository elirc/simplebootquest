test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Gita","events":3},{"name":"Jonah","events":3},{"name":"Luca","events":3},{"name":"Hugo","events":2},{"name":"Ines","events":2},{"name":"Amara","events":1},{"name":"Keiko","events":1},{"name":"Bilal","events":0},{"name":"Dara","events":0}]);
});
