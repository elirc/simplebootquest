test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"amount":950,"running_total":950},{"id":2,"amount":-18,"running_total":932},{"id":3,"amount":-234,"running_total":698},{"id":4,"amount":942,"running_total":1640},{"id":5,"amount":648,"running_total":2288},{"id":6,"amount":715,"running_total":3003},{"id":7,"amount":460,"running_total":3463},{"id":8,"amount":570,"running_total":4033},{"id":9,"amount":999,"running_total":5032}]);
});
