const USERS = Array.from({ length: 2000 }, (_, i) => `user-${i}`);
test('fnv1a', () => {
  expect(fnv1a('')).toBe(2166136261);
  expect(fnv1a('a')).toBe(0xe40c292c);
});
test('buckets are in range and sticky', () => {
  for (const u of USERS.slice(0, 50)) {
    const b = bucket('new-editor', u);
    expect(b >= 0 && b < 100 && Number.isInteger(b)).toBe(true);
    expect(bucket('new-editor', u)).toBe(b);
  }
});
test('extremes', () => {
  expect(USERS.some((u) => isEnabled('f', u, 0))).toBe(false);
  expect(USERS.every((u) => isEnabled('f', u, 100))).toBe(true);
});
test('roughly the right share', () => {
  const on = USERS.filter((u) => isEnabled('new-editor', u, 25)).length;
  expect(on > 400 && on < 600).toBe(true);
});
test('raising the percentage only adds users', () => {
  const at10 = USERS.filter((u) => isEnabled('checkout-v2', u, 10));
  expect(at10.every((u) => isEnabled('checkout-v2', u, 50))).toBe(true);
});
test('different flags pick different users', () => {
  const a = USERS.filter((u) => isEnabled('flag-a', u, 10));
  const b = new Set(USERS.filter((u) => isEnabled('flag-b', u, 10)));
  expect(a.filter((u) => b.has(u)).length < a.length / 2).toBe(true);
});
