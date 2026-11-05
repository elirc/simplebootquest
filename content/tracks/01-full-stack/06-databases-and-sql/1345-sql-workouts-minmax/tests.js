test('returns the expected rows', () => {
  expect(result).toEqual([{"kind":"cardio","min_minutes":72,"max_minutes":107},{"kind":"strength","min_minutes":18,"max_minutes":106}]);
});
