test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Drift"},{"title":"Echoes"},{"title":"Halo"},{"title":"Lanterns"},{"title":"Riverside"},{"title":"Sunrise"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
