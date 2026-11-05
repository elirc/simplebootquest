test('returns the expected rows', () => {
  expect(result).toEqual([{"total":5}]);
});

test("the row exists", () => {
  expect(query("SELECT id, name FROM recipes WHERE id = 100")).toEqual([{"id":100,"name":"New recipe"}]);
});
