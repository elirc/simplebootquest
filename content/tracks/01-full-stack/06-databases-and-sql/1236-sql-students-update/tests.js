test("only the matching rows changed", () => {
  expect(query("SELECT id, age FROM students ORDER BY id")).toEqual([{"id":1,"age":36},{"id":2,"age":25},{"id":3,"age":36},{"id":4,"age":40},{"id":5,"age":43},{"id":6,"age":29},{"id":7,"age":18},{"id":8,"age":31},{"id":9,"age":24}]);
});
