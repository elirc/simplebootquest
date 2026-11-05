test('returns the expected rows', () => {
  expect(result).toEqual([{"subject":"Dark mode","replies":9,"age_hours":2},{"subject":"Feature idea","replies":8,"age_hours":26},{"subject":"Login fails","replies":11,"age_hours":36},{"subject":"Password reset","replies":3,"age_hours":41},{"subject":"Email change","replies":6,"age_hours":89},{"subject":"Bug in export","replies":5,"age_hours":133},{"subject":"Missing order","replies":5,"age_hours":143},{"subject":"Slow page","replies":2,"age_hours":168},{"subject":"Refund request","replies":4,"age_hours":176}]);
});
