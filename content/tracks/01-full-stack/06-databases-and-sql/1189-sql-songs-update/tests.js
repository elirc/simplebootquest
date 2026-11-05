test("only the matching rows changed", () => {
  expect(query("SELECT id, seconds FROM songs ORDER BY id")).toEqual([{"id":1,"seconds":393},{"id":2,"seconds":204},{"id":3,"seconds":334},{"id":4,"seconds":351},{"id":5,"seconds":414},{"id":6,"seconds":393},{"id":7,"seconds":267},{"id":8,"seconds":268},{"id":9,"seconds":369}]);
});
