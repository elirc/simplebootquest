test("only the matching rows changed", () => {
  expect(query("SELECT id, price_k FROM cars ORDER BY id")).toEqual([{"id":1,"price_k":29},{"id":2,"price_k":35},{"id":3,"price_k":39},{"id":4,"price_k":57},{"id":5,"price_k":45},{"id":6,"price_k":30},{"id":7,"price_k":40},{"id":8,"price_k":58},{"id":9,"price_k":53}]);
});
