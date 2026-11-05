test("only the matching rows changed", () => {
  expect(query("SELECT id, nightly_price FROM hotels ORDER BY id")).toEqual([{"id":1,"nightly_price":268},{"id":2,"nightly_price":54},{"id":3,"nightly_price":273},{"id":4,"nightly_price":285},{"id":5,"nightly_price":418},{"id":6,"nightly_price":397},{"id":7,"nightly_price":345},{"id":8,"nightly_price":384},{"id":9,"nightly_price":97}]);
});
