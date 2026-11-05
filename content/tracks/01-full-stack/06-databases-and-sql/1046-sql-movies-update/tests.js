test("only the matching rows changed", () => {
  expect(query("SELECT id, rating FROM movies ORDER BY id")).toEqual([{"id":1,"rating":7.9},{"id":2,"rating":5},{"id":3,"rating":7.5},{"id":4,"rating":17.9},{"id":5,"rating":8.3},{"id":6,"rating":4.5},{"id":7,"rating":14.9},{"id":8,"rating":17.3},{"id":9,"rating":6.8}]);
});
