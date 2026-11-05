test("only the matching rows changed", () => {
  expect(query("SELECT id, duration_min FROM flights ORDER BY id")).toEqual([{"id":1,"duration_min":244},{"id":2,"duration_min":66},{"id":3,"duration_min":800},{"id":4,"duration_min":541},{"id":5,"duration_min":699},{"id":6,"duration_min":459},{"id":7,"duration_min":542},{"id":8,"duration_min":273},{"id":9,"duration_min":267}]);
});
