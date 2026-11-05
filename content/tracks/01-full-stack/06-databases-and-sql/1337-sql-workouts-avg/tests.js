test('returns the expected rows', () => {
  expect(result).toEqual([{"kind":"cardio","avg_minutes":89.5},{"kind":"strength","avg_minutes":55.1}]);
});
