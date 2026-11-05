test('returns the expected rows', () => {
  expect(result).toEqual([{"code":"B-201","total_cents":9244,"items":2},{"code":"E-500","total_cents":12042,"items":3},{"code":"C-302","total_cents":2329,"items":4},{"code":"A-101","total_cents":18219,"items":6},{"code":"A-102","total_cents":3144,"items":6},{"code":"C-300","total_cents":20866,"items":7},{"code":"D-401","total_cents":4387,"items":7},{"code":"E-501","total_cents":13501,"items":8},{"code":"A-100","total_cents":7575,"items":9}]);
});
