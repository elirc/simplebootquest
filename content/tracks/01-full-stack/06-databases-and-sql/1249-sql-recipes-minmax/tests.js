test('returns the expected rows', () => {
  expect(result).toEqual([{"difficulty":"easy","min_calories":336,"max_calories":914},{"difficulty":"hard","min_calories":253,"max_calories":651},{"difficulty":"medium","min_calories":224,"max_calories":252}]);
});
