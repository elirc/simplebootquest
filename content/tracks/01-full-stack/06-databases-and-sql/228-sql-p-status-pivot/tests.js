test("returns the expected rows", () => {
  expect(result).toEqual([{"name": "Ada", "pending": 1, "paid": 1, "shipped": 1, "cancelled": 0}, {"name": "Alan", "pending": 1, "paid": 0, "shipped": 1, "cancelled": 0}, {"name": "Grace", "pending": 1, "paid": 1, "shipped": 1, "cancelled": 0}, {"name": "Katherine", "pending": 0, "paid": 0, "shipped": 0, "cancelled": 0}, {"name": "Linus", "pending": 0, "paid": 1, "shipped": 0, "cancelled": 1}, {"name": "Margaret", "pending": 0, "paid": 0, "shipped": 0, "cancelled": 0}]);
});
