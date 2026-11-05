test("only the matching rows changed", () => {
  expect(query("SELECT id, replies FROM tickets ORDER BY id")).toEqual([{"id":1,"replies":2},{"id":2,"replies":6},{"id":3,"replies":5},{"id":4,"replies":9},{"id":5,"replies":11},{"id":6,"replies":14},{"id":7,"replies":8},{"id":8,"replies":5},{"id":9,"replies":13}]);
});
