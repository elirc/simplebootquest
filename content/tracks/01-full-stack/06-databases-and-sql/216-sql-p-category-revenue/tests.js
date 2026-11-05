test("returns the expected rows", () => {
  expect(result).toEqual([{"category": "displays", "revenue": 727.0, "orders": 2}, {"category": "accessories", "revenue": 249.0, "orders": 4}, {"category": "audio", "revenue": 207.0, "orders": 2}, {"category": "peripherals", "revenue": 176.0, "orders": 3}]);
});
