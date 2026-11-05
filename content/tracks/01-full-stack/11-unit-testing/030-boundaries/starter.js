test('international orders under the threshold pay 999', () => {
  expect(shippingCost(1000, 'FR')).toBe(999);
});
