test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"total_cents":7575,"running_total":7575},{"id":2,"total_cents":18219,"running_total":25794},{"id":3,"total_cents":12042,"running_total":37836},{"id":4,"total_cents":9244,"running_total":47080},{"id":5,"total_cents":13501,"running_total":60581},{"id":6,"total_cents":20866,"running_total":81447},{"id":7,"total_cents":3144,"running_total":84591},{"id":8,"total_cents":4387,"running_total":88978},{"id":9,"total_cents":2329,"running_total":91307}]);
});
