test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"replies":2,"running_total":2},{"id":2,"replies":6,"running_total":8},{"id":3,"replies":5,"running_total":13},{"id":4,"replies":9,"running_total":22},{"id":5,"replies":11,"running_total":33},{"id":6,"replies":4,"running_total":37},{"id":7,"replies":8,"running_total":45},{"id":8,"replies":5,"running_total":50},{"id":9,"replies":3,"running_total":53}]);
});
