test('returns the expected rows', () => {
  expect(result).toEqual([{"code":"C-300","total_cents":20866},{"code":"A-101","total_cents":18219},{"code":"E-501","total_cents":13501},{"code":"E-500","total_cents":12042}]);
});
