test('returns the expected rows', () => {
  expect(result).toEqual([{"label":"Sat ride","events":3},{"label":"Wed lift","events":3},{"label":"Thu yoga","events":2},{"label":"Fri run","events":1},{"label":"Tue swim","events":1},{"label":"Wed swim","events":1},{"label":"Fri yoga","events":0},{"label":"Sun walk","events":0},{"label":"Thu ride","events":0}]);
});
