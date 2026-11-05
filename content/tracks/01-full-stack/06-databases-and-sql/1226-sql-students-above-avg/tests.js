test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Bilal"},{"name":"Dara"},{"name":"Hugo"},{"name":"Ines"},{"name":"Keiko"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
