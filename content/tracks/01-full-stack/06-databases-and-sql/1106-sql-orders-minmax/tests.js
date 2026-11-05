test('returns the expected rows', () => {
  expect(result).toEqual([{"status":"cancelled","min_total_cents":18219,"max_total_cents":18219},{"status":"paid","min_total_cents":7575,"max_total_cents":12042},{"status":"pending","min_total_cents":2329,"max_total_cents":20866},{"status":"shipped","min_total_cents":3144,"max_total_cents":13501}]);
});
