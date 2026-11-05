test('returns the expected rows', () => {
  expect(result).toEqual([{"subject":"Bug in export","events":3},{"subject":"Email change","events":3},{"subject":"Missing order","events":3},{"subject":"Refund request","events":3},{"subject":"Feature idea","events":2},{"subject":"Password reset","events":2},{"subject":"Slow page","events":2},{"subject":"Login fails","events":1},{"subject":"Dark mode","events":0}]);
});
