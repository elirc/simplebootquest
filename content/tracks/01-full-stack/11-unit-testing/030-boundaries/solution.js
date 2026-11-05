describe('shippingCost', () => {
  test('free at exactly the threshold', () => {
    expect(shippingCost(5000, 'GB')).toBe(0);
    expect(shippingCost(5000, 'FR')).toBe(0);
  });

  test('not free just below the threshold', () => {
    expect(shippingCost(4999, 'GB')).toBe(399);
    expect(shippingCost(4999, 'FR')).toBe(999);
  });

  test('free above the threshold', () => {
    expect(shippingCost(5001, 'US')).toBe(0);
  });

  test('zero is a valid subtotal', () => {
    expect(shippingCost(0, 'GB')).toBe(399);
  });

  test('negative subtotals throw', () => {
    expect(() => shippingCost(-1, 'GB')).toThrow(RangeError);
  });
});
