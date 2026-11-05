test('returns the expected rows', () => {
  expect(result).toEqual([{"total":4}]);
});

test("the row exists", () => {
  expect(query("SELECT id, title FROM movies WHERE id = 100")).toEqual([{"id":100,"title":"New movie"}]);
});
