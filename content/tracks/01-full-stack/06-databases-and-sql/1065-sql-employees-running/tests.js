test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"years_at_company":12,"running_total":12},{"id":2,"years_at_company":7,"running_total":19},{"id":3,"years_at_company":7,"running_total":26},{"id":4,"years_at_company":14,"running_total":40},{"id":5,"years_at_company":13,"running_total":53},{"id":6,"years_at_company":10,"running_total":63},{"id":7,"years_at_company":13,"running_total":76},{"id":8,"years_at_company":14,"running_total":90},{"id":9,"years_at_company":13,"running_total":103}]);
});
