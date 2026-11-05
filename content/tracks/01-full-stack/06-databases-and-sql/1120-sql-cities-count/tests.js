test('returns the expected rows', () => {
  expect(result).toEqual([{"continent":"Asia","total":3},{"continent":"Europe","total":3},{"continent":"Oceania","total":2},{"continent":"Americas","total":1}]);
});
