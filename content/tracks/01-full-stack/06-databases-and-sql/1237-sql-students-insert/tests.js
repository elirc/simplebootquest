test('returns the expected rows', () => {
  expect(result).toEqual([{"total":6}]);
});

test("the row exists", () => {
  expect(query("SELECT id, name FROM students WHERE id = 100")).toEqual([{"id":100,"name":"New student"}]);
});
