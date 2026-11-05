test('returns the expected rows', () => {
  expect(result).toEqual([{"subject":"Password reset","total":34},{"subject":"Refund request","total":27},{"subject":"Email change","total":26},{"subject":"Feature idea","total":26},{"subject":"Bug in export","total":21},{"subject":"Slow page","total":20},{"subject":"Login fails","total":10},{"subject":"Missing order","total":6}]);
});
