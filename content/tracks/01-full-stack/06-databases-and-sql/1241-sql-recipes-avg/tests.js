test('returns the expected rows', () => {
  expect(result).toEqual([{"difficulty":"easy","avg_calories":641.3},{"difficulty":"hard","avg_calories":499.7},{"difficulty":"medium","avg_calories":238}]);
});
