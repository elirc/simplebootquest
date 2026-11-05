test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"minutes":25,"running_total":25},{"id":2,"minutes":18,"running_total":43},{"id":3,"minutes":34,"running_total":77},{"id":4,"minutes":106,"running_total":183},{"id":5,"minutes":20,"running_total":203},{"id":6,"minutes":72,"running_total":275},{"id":7,"minutes":107,"running_total":382},{"id":8,"minutes":98,"running_total":480},{"id":9,"minutes":85,"running_total":565}]);
});
