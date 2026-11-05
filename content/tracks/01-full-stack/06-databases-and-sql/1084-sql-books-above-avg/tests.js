test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Clean Code"},{"title":"Persuasion"},{"title":"Siddhartha"},{"title":"Ulysses"},{"title":"Walden"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
