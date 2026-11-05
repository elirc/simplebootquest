test('returns the expected rows', () => {
  expect(result).toEqual([{"total":4}]);
});

test("the row exists", () => {
  expect(query("SELECT id, name FROM employees WHERE id = 100")).toEqual([{"id":100,"name":"New employee"}]);
});
