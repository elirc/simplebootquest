test('returns the expected rows', () => {
  expect(result).toEqual([{"subject":"Bug in export","band":"medium"},{"subject":"Dark mode","band":"high"},{"subject":"Email change","band":"medium"},{"subject":"Feature idea","band":"high"},{"subject":"Login fails","band":"high"},{"subject":"Missing order","band":"medium"},{"subject":"Password reset","band":"low"},{"subject":"Refund request","band":"medium"},{"subject":"Slow page","band":"low"}]);
});
