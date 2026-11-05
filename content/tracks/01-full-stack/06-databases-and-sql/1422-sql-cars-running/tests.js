test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"price_k":19,"running_total":19},{"id":2,"price_k":35,"running_total":54},{"id":3,"price_k":39,"running_total":93},{"id":4,"price_k":47,"running_total":140},{"id":5,"price_k":45,"running_total":185},{"id":6,"price_k":30,"running_total":215},{"id":7,"price_k":40,"running_total":255},{"id":8,"price_k":58,"running_total":313},{"id":9,"price_k":53,"running_total":366}]);
});
