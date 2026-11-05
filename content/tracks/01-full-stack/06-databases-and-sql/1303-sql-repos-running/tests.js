test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"open_issues":135,"running_total":135},{"id":2,"open_issues":31,"running_total":166},{"id":3,"open_issues":87,"running_total":253},{"id":4,"open_issues":124,"running_total":377},{"id":5,"open_issues":100,"running_total":477},{"id":6,"open_issues":60,"running_total":537},{"id":7,"open_issues":121,"running_total":658},{"id":8,"open_issues":67,"running_total":725},{"id":9,"open_issues":67,"running_total":792}]);
});
