test("returns the expected rows", () => {
  expect(result).toEqual([{"name": "Kim", "depth": 1}, {"name": "Sam", "depth": 1}, {"name": "Ana", "depth": 2}, {"name": "Ola", "depth": 2}, {"name": "Tom", "depth": 2}]);
});
test('uses a recursive CTE', () => {
  expect(/with\s+recursive/i.test(code)).toBe(true);
});
