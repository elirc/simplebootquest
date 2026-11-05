test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"water_every_days":6,"running_total":6},{"id":2,"water_every_days":18,"running_total":24},{"id":3,"water_every_days":7,"running_total":31},{"id":4,"water_every_days":19,"running_total":50},{"id":5,"water_every_days":11,"running_total":61},{"id":6,"water_every_days":9,"running_total":70},{"id":7,"water_every_days":15,"running_total":85},{"id":8,"water_every_days":4,"running_total":89},{"id":9,"water_every_days":5,"running_total":94}]);
});
