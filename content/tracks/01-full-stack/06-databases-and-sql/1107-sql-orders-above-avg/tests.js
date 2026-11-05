test('returns the expected rows', () => {
  expect(result).toEqual([{"code":"A-101"},{"code":"C-300"},{"code":"E-500"},{"code":"E-501"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
