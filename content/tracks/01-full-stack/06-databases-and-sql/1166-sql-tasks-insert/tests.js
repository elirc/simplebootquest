test('returns the expected rows', () => {
  expect(result).toEqual([{"total":2}]);
});

test("the row exists", () => {
  expect(query("SELECT id, title FROM tasks WHERE id = 100")).toEqual([{"id":100,"title":"New task"}]);
});
