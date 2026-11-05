test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Austin"},{"name":"Cairo"},{"name":"Lima"},{"name":"Oslo"},{"name":"Seoul"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
