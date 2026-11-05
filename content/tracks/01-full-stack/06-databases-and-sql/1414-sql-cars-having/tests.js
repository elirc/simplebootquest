test('returns the expected rows', () => {
  expect(result).toEqual([{"fuel":"diesel","total":2},{"fuel":"electric","total":3},{"fuel":"hybrid","total":2},{"fuel":"petrol","total":2}]);
});
