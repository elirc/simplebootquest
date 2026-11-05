test("the right rows remain", () => {
  expect(query("SELECT id FROM songs ORDER BY id")).toEqual([{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":9}]);
});

test("events are untouched", () => {
  expect(query("SELECT COUNT(*) AS n FROM song_events")).toEqual([{"n":16}]);
});
