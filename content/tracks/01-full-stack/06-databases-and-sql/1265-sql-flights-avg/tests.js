test('returns the expected rows', () => {
  expect(result).toEqual([{"airline":"oneworld","avg_duration_min":159.5},{"airline":"skyteam","avg_duration_min":463.3},{"airline":"star","avg_duration_min":566.3}]);
});
