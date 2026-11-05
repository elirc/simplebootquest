test('returns the expected rows', () => {
  expect(result).toEqual([{"label":"Fri yoga"},{"label":"Thu ride"},{"label":"Tue swim"},{"label":"Wed lift"},{"label":"Wed swim"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
