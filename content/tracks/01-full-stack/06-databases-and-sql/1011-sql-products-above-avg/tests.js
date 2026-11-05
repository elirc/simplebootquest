test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Headphones"},{"name":"Notebook"},{"name":"Plant Pot"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
