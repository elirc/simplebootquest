test('returns the expected rows', () => {
  expect(result).toEqual([{"total":3}]);
});

test("the row exists", () => {
  expect(query("SELECT id, number FROM flights WHERE id = 100")).toEqual([{"id":100,"number":"New flight"}]);
});
