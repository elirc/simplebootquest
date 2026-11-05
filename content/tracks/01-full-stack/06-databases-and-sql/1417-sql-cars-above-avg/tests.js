test('returns the expected rows', () => {
  expect(result).toEqual([{"model":"Fiesta"},{"model":"Leaf"},{"model":"Mazda3"},{"model":"Model 3"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
