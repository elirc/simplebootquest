test('returns the expected rows', () => {
  expect(result).toEqual([{"level":"junior","min_years_at_company":12,"max_years_at_company":14},{"level":"mid","min_years_at_company":14,"max_years_at_company":14},{"level":"senior","min_years_at_company":7,"max_years_at_company":13}]);
});
