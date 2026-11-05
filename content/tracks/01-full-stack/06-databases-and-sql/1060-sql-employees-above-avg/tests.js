test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Ada"},{"name":"Dennis"},{"name":"Frances"},{"name":"Ken"},{"name":"Margaret"},{"name":"Radia"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
