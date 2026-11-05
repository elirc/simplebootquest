test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Amara","views":1,"likes":0,"shares":0},{"name":"Gita","views":2,"likes":0,"shares":1},{"name":"Hugo","views":0,"likes":2,"shares":0},{"name":"Ines","views":1,"likes":1,"shares":0},{"name":"Jonah","views":2,"likes":0,"shares":1},{"name":"Keiko","views":0,"likes":0,"shares":1},{"name":"Luca","views":1,"likes":1,"shares":1}]);
});
