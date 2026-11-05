test("returns the expected rows", () => {
  expect(result).toEqual([{"category": "displays", "revenue_cents": 72700, "pct": 53.5}, {"category": "accessories", "revenue_cents": 24900, "pct": 18.3}, {"category": "audio", "revenue_cents": 20700, "pct": 15.2}, {"category": "peripherals", "revenue_cents": 17600, "pct": 13.0}]);
});
