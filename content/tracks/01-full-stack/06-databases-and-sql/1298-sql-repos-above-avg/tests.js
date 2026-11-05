test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"api-gateway"},{"name":"cli"},{"name":"docs"},{"name":"web-app"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
