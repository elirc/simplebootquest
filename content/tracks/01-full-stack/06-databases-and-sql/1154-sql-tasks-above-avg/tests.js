test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Add search"},{"title":"Deploy API"},{"title":"Fix login"},{"title":"Refactor auth"},{"title":"Write docs"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
