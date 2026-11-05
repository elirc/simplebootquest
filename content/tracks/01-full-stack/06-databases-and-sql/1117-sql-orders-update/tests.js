test("only the matching rows changed", () => {
  expect(query("SELECT id, total_cents FROM orders ORDER BY id")).toEqual([{"id":1,"total_cents":7575},{"id":2,"total_cents":18229},{"id":3,"total_cents":12042},{"id":4,"total_cents":9244},{"id":5,"total_cents":13501},{"id":6,"total_cents":20866},{"id":7,"total_cents":3144},{"id":8,"total_cents":4387},{"id":9,"total_cents":2329}]);
});
