test("returns the expected rows", () => {
  expect(result).toEqual([{"name": "Sam", "reports": 3}, {"name": "Dev", "reports": 2}, {"name": "Mei", "reports": 2}, {"name": "Rosa", "reports": 2}]);
});
