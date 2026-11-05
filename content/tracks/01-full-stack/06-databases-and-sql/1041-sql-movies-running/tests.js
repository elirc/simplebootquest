test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"rating":7.9,"running_total":7.9},{"id":2,"rating":5,"running_total":12.9},{"id":3,"rating":7.5,"running_total":20.4},{"id":4,"rating":7.9,"running_total":28.3},{"id":5,"rating":8.3,"running_total":36.6},{"id":6,"rating":4.5,"running_total":41.1},{"id":7,"rating":4.9,"running_total":46},{"id":8,"rating":7.3,"running_total":53.300000000000004},{"id":9,"rating":6.8,"running_total":60.1}]);
});
