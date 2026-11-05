test("only the matching rows changed", () => {
  expect(query("SELECT id, years_at_company FROM employees ORDER BY id")).toEqual([{"id":1,"years_at_company":22},{"id":2,"years_at_company":7},{"id":3,"years_at_company":7},{"id":4,"years_at_company":24},{"id":5,"years_at_company":23},{"id":6,"years_at_company":10},{"id":7,"years_at_company":13},{"id":8,"years_at_company":14},{"id":9,"years_at_company":13}]);
});
