test('returns the expected rows', () => {
  expect(result).toEqual([{"reference":"TX-02"},{"reference":"TX-04"},{"reference":"TX-06"},{"reference":"TX-08"},{"reference":"TX-10"},{"reference":"TX-12"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
