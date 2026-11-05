test("only the matching rows changed", () => {
  expect(query("SELECT id, water_every_days FROM plants ORDER BY id")).toEqual([{"id":1,"water_every_days":6},{"id":2,"water_every_days":28},{"id":3,"water_every_days":7},{"id":4,"water_every_days":19},{"id":5,"water_every_days":11},{"id":6,"water_every_days":9},{"id":7,"water_every_days":15},{"id":8,"water_every_days":14},{"id":9,"water_every_days":15}]);
});
