test("returns the expected rows", () => {
  expect(result).toEqual([{"name": "Linus", "spent_cents": 50200}, {"name": "Grace", "spent_cents": 42500}]);
});
