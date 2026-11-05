test("only the matching rows changed", () => {
  expect(query("SELECT id, open_issues FROM repos ORDER BY id")).toEqual([{"id":1,"open_issues":135},{"id":2,"open_issues":41},{"id":3,"open_issues":87},{"id":4,"open_issues":124},{"id":5,"open_issues":100},{"id":6,"open_issues":60},{"id":7,"open_issues":131},{"id":8,"open_issues":67},{"id":9,"open_issues":77}]);
});
