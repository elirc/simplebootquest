test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Accessibility"},{"title":"CSS Layouts"},{"title":"Node APIs"},{"title":"Testing JS"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
