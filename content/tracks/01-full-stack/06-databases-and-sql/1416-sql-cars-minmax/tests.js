test('returns the expected rows', () => {
  expect(result).toEqual([{"fuel":"diesel","min_price_k":19,"max_price_k":47},{"fuel":"electric","min_price_k":30,"max_price_k":40},{"fuel":"hybrid","min_price_k":45,"max_price_k":58},{"fuel":"petrol","min_price_k":39,"max_price_k":53}]);
});
