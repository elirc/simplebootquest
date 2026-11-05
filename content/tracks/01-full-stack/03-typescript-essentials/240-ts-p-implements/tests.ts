test('gift card', () => {
  const g = new GiftCard('gc', 1000);
  expect(g.charge(400)).toEqual({ ok: true, remaining: 600 });
  expect(g.charge(700)).toEqual({ ok: false, reason: 'insufficient funds' });
  expect(g.charge(0)).toEqual({ ok: false, reason: 'invalid amount' });
  expect(g.charge(600)).toEqual({ ok: true, remaining: 0 });
});
test('credit card limit', () => {
  const c = new CreditCard('cc', 500);
  expect(c.charge(500)).toEqual({ ok: true, remaining: 0 });
  expect(c.charge(1).ok).toBe(false);
});
test('payWith falls through', () => {
  expect(payWith([new GiftCard('gc', 100), new CreditCard('cc', 5000)], 300)).toBe('cc');
  expect(payWith([new GiftCard('gc', 100)], 300)).toBeNull();
  expect(new GiftCard('x', 1).id).toBe('x');
});
