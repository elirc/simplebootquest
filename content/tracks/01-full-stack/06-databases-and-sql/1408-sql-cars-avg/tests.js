test('returns the expected rows', () => {
  expect(result).toEqual([{"fuel":"diesel","avg_price_k":33},{"fuel":"electric","avg_price_k":35},{"fuel":"hybrid","avg_price_k":51.5},{"fuel":"petrol","avg_price_k":46}]);
});
