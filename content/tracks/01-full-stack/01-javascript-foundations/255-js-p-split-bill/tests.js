test('even split', () => expect(splitBill(900, 3)).toEqual([300, 300, 300]));
test('remainder goes to the first people', () => expect(splitBill(1000, 3)).toEqual([334, 333, 333]));
test('includes the tip', () => expect(splitBill(1000, 2, 15)).toEqual([575, 575]));
test('shares always sum to the total', () => {
  const shares = splitBill(12345, 7, 12.5);
  expect(shares.reduce((a, b) => a + b, 0)).toBe(Math.round(12345 * 1.125));
});
test('needs people', () => expect(() => splitBill(100, 0)).toThrow(RangeError));
