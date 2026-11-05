test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Cloud Atlas"},{"title":"Last Light"},{"title":"Open Road"},{"title":"Paper Moon"},{"title":"Quiet Storm"},{"title":"Red Harbor"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
