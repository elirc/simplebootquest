test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"duration_min":244,"running_total":244},{"id":2,"duration_min":56,"running_total":300},{"id":3,"duration_min":800,"running_total":1100},{"id":4,"duration_min":541,"running_total":1641},{"id":5,"duration_min":699,"running_total":2340},{"id":6,"duration_min":459,"running_total":2799},{"id":7,"duration_min":542,"running_total":3341},{"id":8,"duration_min":263,"running_total":3604},{"id":9,"duration_min":267,"running_total":3871}]);
});
