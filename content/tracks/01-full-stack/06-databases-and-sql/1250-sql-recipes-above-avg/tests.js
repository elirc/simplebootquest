test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Curry"},{"name":"Paella"},{"name":"Shakshuka"},{"name":"Tacos"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
