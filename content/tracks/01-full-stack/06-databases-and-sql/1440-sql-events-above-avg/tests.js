test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"AI Panel"},{"name":"Code Dojo"},{"name":"Demo Day"},{"name":"Startup Night"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
