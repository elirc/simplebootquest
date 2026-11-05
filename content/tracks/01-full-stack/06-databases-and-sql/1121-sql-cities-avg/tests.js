test('returns the expected rows', () => {
  expect(result).toEqual([{"continent":"Americas","avg_avg_temp":2},{"continent":"Asia","avg_avg_temp":9},{"continent":"Europe","avg_avg_temp":18},{"continent":"Oceania","avg_avg_temp":20}]);
});
