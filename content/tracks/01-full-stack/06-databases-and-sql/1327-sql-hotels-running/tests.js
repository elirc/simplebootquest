test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"nightly_price":258,"running_total":258},{"id":2,"nightly_price":54,"running_total":312},{"id":3,"nightly_price":263,"running_total":575},{"id":4,"nightly_price":275,"running_total":850},{"id":5,"nightly_price":418,"running_total":1268},{"id":6,"nightly_price":387,"running_total":1655},{"id":7,"nightly_price":345,"running_total":2000},{"id":8,"nightly_price":384,"running_total":2384},{"id":9,"nightly_price":97,"running_total":2481}]);
});
