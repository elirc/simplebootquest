test("only the matching rows changed", () => {
  expect(query("SELECT id, avg_temp FROM cities ORDER BY id")).toEqual([{"id":1,"avg_temp":11},{"id":2,"avg_temp":14},{"id":3,"avg_temp":11},{"id":4,"avg_temp":25},{"id":5,"avg_temp":20},{"id":6,"avg_temp":2},{"id":7,"avg_temp":15},{"id":8,"avg_temp":12},{"id":9,"avg_temp":23}]);
});
