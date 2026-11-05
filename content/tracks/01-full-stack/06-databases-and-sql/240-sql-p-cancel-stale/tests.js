test("stale pending orders are cancelled", () => {
  expect(query("SELECT id, status FROM orders WHERE id IN (6, 8, 10) ORDER BY id")).toEqual([{"id": 6, "status": "cancelled"}, {"id": 8, "status": "pending"}, {"id": 10, "status": "pending"}]);
});
test("other orders are untouched", () => {
  expect(query("SELECT status, COUNT(*) AS n FROM orders GROUP BY status ORDER BY status")).toEqual([{"status": "cancelled", "n": 2}, {"status": "paid", "n": 3}, {"status": "pending", "n": 2}, {"status": "shipped", "n": 3}]);
});
