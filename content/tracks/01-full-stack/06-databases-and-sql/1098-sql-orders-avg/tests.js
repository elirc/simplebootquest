test('returns the expected rows', () => {
  expect(result).toEqual([{"status":"cancelled","avg_total_cents":18219},{"status":"paid","avg_total_cents":9620.3},{"status":"pending","avg_total_cents":11597.5},{"status":"shipped","avg_total_cents":7010.7}]);
});
