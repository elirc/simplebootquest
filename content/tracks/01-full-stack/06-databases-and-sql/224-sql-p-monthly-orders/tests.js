test("returns the expected rows", () => {
  expect(result).toEqual([{"month": "2025-12", "orders": 2, "cancelled": 0}, {"month": "2026-01", "orders": 4, "cancelled": 1}, {"month": "2026-02", "orders": 4, "cancelled": 0}]);
});
