test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"stock":5,"running_total":5},{"id":2,"stock":29,"running_total":34},{"id":3,"stock":60,"running_total":94},{"id":4,"stock":57,"running_total":151},{"id":5,"stock":12,"running_total":163},{"id":6,"stock":2,"running_total":165},{"id":7,"stock":4,"running_total":169},{"id":8,"stock":16,"running_total":185},{"id":9,"stock":13,"running_total":198}]);
});
