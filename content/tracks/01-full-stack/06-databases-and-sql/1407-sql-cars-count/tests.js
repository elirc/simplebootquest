test('returns the expected rows', () => {
  expect(result).toEqual([{"fuel":"electric","total":3},{"fuel":"diesel","total":2},{"fuel":"hybrid","total":2},{"fuel":"petrol","total":2}]);
});
