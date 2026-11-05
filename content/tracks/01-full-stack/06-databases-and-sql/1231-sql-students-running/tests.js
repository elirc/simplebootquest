test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"age":26,"running_total":26},{"id":2,"age":25,"running_total":51},{"id":3,"age":26,"running_total":77},{"id":4,"age":30,"running_total":107},{"id":5,"age":33,"running_total":140},{"id":6,"age":19,"running_total":159},{"id":7,"age":18,"running_total":177},{"id":8,"age":31,"running_total":208},{"id":9,"age":24,"running_total":232}]);
});
