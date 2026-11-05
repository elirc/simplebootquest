test('labels', () => expect(['pending', 'paid', 'shipped', 'cancelled'].map(statusLabel)).toEqual(['Awaiting payment', 'Paid', 'On its way', 'Cancelled']));
test('allowed transitions', () => {
  expect(canTransition('pending', 'paid')).toBe(true);
  expect(canTransition('paid', 'shipped')).toBe(true);
  expect(canTransition('paid', 'cancelled')).toBe(true);
});
test('forbidden transitions', () => {
  expect(canTransition('shipped', 'pending')).toBe(false);
  expect(canTransition('pending', 'shipped')).toBe(false);
  expect(canTransition('paid', 'paid')).toBe(false);
});
