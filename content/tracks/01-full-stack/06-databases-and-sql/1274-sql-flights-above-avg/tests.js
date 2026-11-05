test('returns the expected rows', () => {
  expect(result).toEqual([{"number":"BA117"},{"number":"IB6251"},{"number":"LH400"},{"number":"QF1"},{"number":"UA90"}]);
});

test('uses a subquery', () => {
  expect((code.match(/select/gi) ?? []).length).toBeGreaterThanOrEqual(2);
});
