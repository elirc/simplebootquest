function harness() {
  const store = new Map();
  const mw = idempotency(store);
  let charges = 0;
  const handler = (req, res) => {
    charges++;
    res.status(201).json({ paymentId: `pay_${charges}` });
  };
  const send = (headers = {}, method = 'POST') => {
    const res = mockRes();
    const req = { method, headers };
    mw(req, res, () => handler(req, res));
    return res;
  };
  return { send, store, charges: () => charges, mw };
}

test('replays the stored response', () => {
  const h = harness();
  const first = h.send({ 'idempotency-key': 'k1' });
  const retry = h.send({ 'idempotency-key': 'k1' });
  expect(first.body).toEqual({ paymentId: 'pay_1' });
  expect(retry.statusCode).toBe(201);
  expect(retry.body).toEqual({ paymentId: 'pay_1' });
  expect(retry.headers['Idempotent-Replayed']).toBe('true');
  expect(h.charges()).toBe(1);
});

test('different keys and missing keys run normally', () => {
  const h = harness();
  h.send({ 'idempotency-key': 'a' });
  h.send({ 'idempotency-key': 'b' });
  h.send();
  h.send({}, 'GET');
  expect(h.charges()).toBe(4);
});

test('concurrent duplicates get 409', () => {
  const h = harness();
  h.store.set('busy', 'in-progress');
  const res = h.send({ 'idempotency-key': 'busy' });
  expect(res.statusCode).toBe(409);
  expect(h.charges()).toBe(0);
});

test('server errors are not cached', () => {
  const store = new Map();
  const mw = idempotency(store);
  const res = mockRes();
  mw({ method: 'POST', headers: { 'idempotency-key': 'z' } }, res, () => res.status(503).json({ error: 'down' }));
  expect(store.has('z')).toBe(false);
});
