test("only the matching rows changed", () => {
  expect(query("SELECT id, registered FROM events ORDER BY id")).toEqual([{"id":1,"registered":47},{"id":2,"registered":108},{"id":3,"registered":247},{"id":4,"registered":241},{"id":5,"registered":354},{"id":6,"registered":148},{"id":7,"registered":349},{"id":8,"registered":46},{"id":9,"registered":136}]);
});
