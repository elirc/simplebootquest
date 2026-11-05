test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"avg_temp":11,"running_total":11},{"id":2,"avg_temp":14,"running_total":25},{"id":3,"avg_temp":11,"running_total":36},{"id":4,"avg_temp":25,"running_total":61},{"id":5,"avg_temp":20,"running_total":81},{"id":6,"avg_temp":2,"running_total":83},{"id":7,"avg_temp":15,"running_total":98},{"id":8,"avg_temp":2,"running_total":100},{"id":9,"avg_temp":23,"running_total":123}]);
});
