test("only the matching rows changed", () => {
  expect(query("SELECT id, estimate FROM tasks ORDER BY id")).toEqual([{"id":1,"estimate":10},{"id":2,"estimate":9},{"id":3,"estimate":12},{"id":4,"estimate":11},{"id":5,"estimate":3},{"id":6,"estimate":11},{"id":7,"estimate":14},{"id":8,"estimate":5},{"id":9,"estimate":3}]);
});
