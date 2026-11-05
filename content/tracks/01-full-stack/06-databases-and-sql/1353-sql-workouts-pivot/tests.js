test('returns the expected rows', () => {
  expect(result).toEqual([{"label":"Fri run","views":0,"likes":0,"shares":1},{"label":"Sat ride","views":1,"likes":1,"shares":1},{"label":"Thu yoga","views":0,"likes":0,"shares":2},{"label":"Tue swim","views":0,"likes":0,"shares":1},{"label":"Wed lift","views":1,"likes":1,"shares":1},{"label":"Wed swim","views":0,"likes":0,"shares":1}]);
});
