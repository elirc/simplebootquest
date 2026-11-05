test("only the matching rows changed", () => {
  expect(query("SELECT id, amount FROM transactions ORDER BY id")).toEqual([{"id":1,"amount":950},{"id":2,"amount":-18},{"id":3,"amount":-234},{"id":4,"amount":942},{"id":5,"amount":648},{"id":6,"amount":725},{"id":7,"amount":470},{"id":8,"amount":570},{"id":9,"amount":999}]);
});
