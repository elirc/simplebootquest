test('returns the expected rows', () => {
  expect(result).toEqual([{"reference":"TX-02","band":"high"},{"reference":"TX-03","band":"medium"},{"reference":"TX-04","band":"medium"},{"reference":"TX-06","band":"high"},{"reference":"TX-07","band":"low"},{"reference":"TX-08","band":"medium"},{"reference":"TX-10","band":"high"},{"reference":"TX-11","band":"low"},{"reference":"TX-12","band":"medium"}]);
});
