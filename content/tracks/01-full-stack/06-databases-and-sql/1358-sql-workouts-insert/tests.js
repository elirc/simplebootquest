test('returns the expected rows', () => {
  expect(result).toEqual([{"total":3}]);
});

test("the row exists", () => {
  expect(query("SELECT id, label FROM workouts WHERE id = 100")).toEqual([{"id":100,"label":"New workout"}]);
});
