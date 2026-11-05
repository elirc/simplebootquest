test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Oslo","avg_temp":25},{"name":"Cairo","avg_temp":23},{"name":"Lima","avg_temp":20},{"name":"Austin","avg_temp":15}]);
});
