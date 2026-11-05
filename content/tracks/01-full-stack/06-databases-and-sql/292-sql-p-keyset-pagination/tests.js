test("returns the expected rows", () => {
  expect(result).toEqual([{"id": 7, "title": "Small Gods", "year": 1992}, {"id": 5, "title": "Parable of the Sower", "year": 1993}, {"id": 10, "title": "Kafka on the Shore", "year": 2002}]);
});
test('does not use OFFSET', () => {
  expect(/offset/i.test(code)).toBe(false);
});
