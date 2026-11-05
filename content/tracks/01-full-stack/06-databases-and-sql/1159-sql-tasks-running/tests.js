test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"estimate":10,"running_total":10},{"id":2,"estimate":9,"running_total":19},{"id":3,"estimate":12,"running_total":31},{"id":4,"estimate":11,"running_total":42},{"id":5,"estimate":3,"running_total":45},{"id":6,"estimate":1,"running_total":46},{"id":7,"estimate":14,"running_total":60},{"id":8,"estimate":5,"running_total":65},{"id":9,"estimate":3,"running_total":68}]);
});
