test('returns the expected rows', () => {
  expect(result).toEqual([{"total":5}]);
});

test("the row exists", () => {
  expect(query("SELECT id, title FROM courses WHERE id = 100")).toEqual([{"id":100,"title":"New course"}]);
});
