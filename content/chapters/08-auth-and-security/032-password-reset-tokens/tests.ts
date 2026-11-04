function setup() {
  let t = 1_000_000;
  const store = new Map();
  const svc = createResetService({ now: () => t, store });
  return { svc, store, advance: (ms) => (t += ms) };
}

test('sha256hex', async () => {
  expect(await sha256hex('abc')).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
});

test('tokens are random, hex, and stored hashed', async () => {
  const { svc, store } = setup();
  const a = await svc.issue(1);
  const b = await svc.issue(2);
  expect(a).toMatch(/^[0-9a-f]{64}$/);
  expect(a).not.toBe(b);
  expect(store.has(a)).toBe(false);
  expect(store.has(await sha256hex(a))).toBe(true);
});

test('redeem is single use', async () => {
  const { svc } = setup();
  const token = await svc.issue(7);
  expect(await svc.redeem(token)).toBe(7);
  await expect(svc.redeem(token)).rejects.toThrow('Invalid or expired token');
});

test('tokens expire after 30 minutes', async () => {
  const { svc, store, advance } = setup();
  const token = await svc.issue(7);
  advance(30 * 60 * 1000);
  await expect(svc.redeem(token)).rejects.toThrow('Invalid or expired token');
  expect(store.size).toBe(0);
});

test('a new token invalidates old ones', async () => {
  const { svc } = setup();
  const old = await svc.issue(7);
  const fresh = await svc.issue(7);
  await expect(svc.redeem(old)).rejects.toThrow();
  expect(await svc.redeem(fresh)).toBe(7);
});
