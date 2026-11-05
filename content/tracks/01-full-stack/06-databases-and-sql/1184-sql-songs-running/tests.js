test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"seconds":393,"running_total":393},{"id":2,"seconds":204,"running_total":597},{"id":3,"seconds":334,"running_total":931},{"id":4,"seconds":351,"running_total":1282},{"id":5,"seconds":414,"running_total":1696},{"id":6,"seconds":393,"running_total":2089},{"id":7,"seconds":267,"running_total":2356},{"id":8,"seconds":258,"running_total":2614},{"id":9,"seconds":369,"running_total":2983}]);
});
