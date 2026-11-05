test('returns the expected rows', () => {
  expect(result).toEqual([{"total":2}]);
});

test("the row exists", () => {
  expect(query("SELECT id, name FROM cities WHERE id = 100")).toEqual([{"id":100,"name":"New city"}]);
});
