function run(mw, req) {
  const res = mockRes();
  let nextCalled = false;
  mw(req, res, () => (nextCalled = true));
  return { res, nextCalled };
}

test('requireAuth', () => {
  expect(run(requireAuth, {}).res.statusCode).toBe(401);
  expect(run(requireAuth, { user: { id: 1 } }).nextCalled).toBe(true);
});

test('requireRole distinguishes 401 and 403', () => {
  const mw = requireRole('admin', 'editor');
  expect(run(mw, {}).res.statusCode).toBe(401);
  const member = run(mw, { user: { id: 1, role: 'member' } });
  expect(member.res.statusCode).toBe(403);
  expect(member.res.body).toEqual({ error: 'Forbidden' });
  expect(run(mw, { user: { id: 2, role: 'editor' } }).nextCalled).toBe(true);
});

test('requireOwnerOrRole', () => {
  const mw = requireOwnerOrRole((req) => req.resource.ownerId, 'admin');
  expect(run(mw, { user: { id: 5, role: 'member' }, resource: { ownerId: 5 } }).nextCalled).toBe(true);
  expect(run(mw, { user: { id: 6, role: 'member' }, resource: { ownerId: 5 } }).res.statusCode).toBe(403);
  expect(run(mw, { user: { id: 9, role: 'admin' }, resource: { ownerId: 5 } }).nextCalled).toBe(true);
});
