test('returns the expected rows', () => {
  expect(result).toEqual([{"assignee":"linus"}]);
});

test('uses a CTE', () => {
  expect(/\bwith\b/i.test(code)).toBe(true);
});
