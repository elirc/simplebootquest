test("only the matching rows changed", () => {
  expect(query("SELECT id, enrolled FROM courses ORDER BY id")).toEqual([{"id":1,"enrolled":2242},{"id":2,"enrolled":3997},{"id":3,"enrolled":1194},{"id":4,"enrolled":4079},{"id":5,"enrolled":2467},{"id":6,"enrolled":4034},{"id":7,"enrolled":1529},{"id":8,"enrolled":263},{"id":9,"enrolled":4214}]);
});
