test('returns the expected rows', () => {
  expect(result).toEqual([{"subject":"Dark mode"},{"subject":"Email change"},{"subject":"Feature idea"},{"subject":"Login fails"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
