test("only the matching rows changed", () => {
  expect(query("SELECT id, stock FROM products ORDER BY id")).toEqual([{"id":1,"stock":15},{"id":2,"stock":29},{"id":3,"stock":60},{"id":4,"stock":57},{"id":5,"stock":12},{"id":6,"stock":12},{"id":7,"stock":14},{"id":8,"stock":16},{"id":9,"stock":13}]);
});
