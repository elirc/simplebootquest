test('returns the expected rows', () => {
  expect(result).toEqual([{"airline":"oneworld","min_duration_min":56,"max_duration_min":263},{"airline":"skyteam","min_duration_min":244,"max_duration_min":800},{"airline":"star","min_duration_min":459,"max_duration_min":699}]);
});
