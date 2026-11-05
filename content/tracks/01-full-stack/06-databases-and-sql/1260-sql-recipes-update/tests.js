test("only the matching rows changed", () => {
  expect(query("SELECT id, calories FROM recipes ORDER BY id")).toEqual([{"id":1,"calories":651},{"id":2,"calories":253},{"id":3,"calories":477},{"id":4,"calories":224},{"id":5,"calories":924},{"id":6,"calories":252},{"id":7,"calories":595},{"id":8,"calories":346},{"id":9,"calories":858}]);
});
