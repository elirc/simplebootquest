test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Basil"},{"name":"Ivy"},{"name":"Lavender"},{"name":"Peace Lily"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
