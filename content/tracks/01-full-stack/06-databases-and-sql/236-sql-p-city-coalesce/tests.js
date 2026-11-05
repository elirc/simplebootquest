test("returns the expected rows", () => {
  expect(result).toEqual([{"city": "London", "customers": 2}, {"city": "Unknown", "customers": 2}, {"city": "Helsinki", "customers": 1}, {"city": "New York", "customers": 1}]);
});
