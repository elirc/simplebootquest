test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Olive Court"},{"name":"Riverside Inn"},{"name":"Sky Garden"},{"name":"The Grand"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
