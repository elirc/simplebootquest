test('returns the expected rows', () => {
  expect(result).toEqual([{"continent":"Americas","min_avg_temp":2,"max_avg_temp":2},{"continent":"Asia","min_avg_temp":2,"max_avg_temp":14},{"continent":"Europe","min_avg_temp":11,"max_avg_temp":23},{"continent":"Oceania","min_avg_temp":15,"max_avg_temp":25}]);
});
