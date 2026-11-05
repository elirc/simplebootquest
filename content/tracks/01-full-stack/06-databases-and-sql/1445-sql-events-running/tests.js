test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"registered":37,"running_total":37},{"id":2,"registered":108,"running_total":145},{"id":3,"registered":247,"running_total":392},{"id":4,"registered":231,"running_total":623},{"id":5,"registered":354,"running_total":977},{"id":6,"registered":138,"running_total":1115},{"id":7,"registered":339,"running_total":1454},{"id":8,"registered":46,"running_total":1500},{"id":9,"registered":126,"running_total":1626}]);
});
