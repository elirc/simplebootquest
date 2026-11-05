test("only the matching rows changed", () => {
  expect(query("SELECT id, minutes FROM workouts ORDER BY id")).toEqual([{"id":1,"minutes":25},{"id":2,"minutes":18},{"id":3,"minutes":34},{"id":4,"minutes":106},{"id":5,"minutes":20},{"id":6,"minutes":82},{"id":7,"minutes":117},{"id":8,"minutes":98},{"id":9,"minutes":85}]);
});
