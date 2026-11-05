test("only the matching rows changed", () => {
  expect(query("SELECT id, pages FROM books ORDER BY id")).toEqual([{"id":1,"pages":184},{"id":2,"pages":576},{"id":3,"pages":582},{"id":4,"pages":715},{"id":5,"pages":174},{"id":6,"pages":491},{"id":7,"pages":179},{"id":8,"pages":454},{"id":9,"pages":242}]);
});
