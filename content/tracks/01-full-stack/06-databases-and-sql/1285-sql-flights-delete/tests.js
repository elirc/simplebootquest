test("the right rows remain", () => {
  expect(query("SELECT id FROM flights ORDER BY id")).toEqual([{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9}]);
});

test("events are untouched", () => {
  expect(query("SELECT COUNT(*) AS n FROM flight_events")).toEqual([{"n":9}]);
});
