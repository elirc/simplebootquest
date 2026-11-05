test('parses valid users with defaults', () => {
  expect(parseUsers({ data: [{ id: 1, email: 'a@x.io' }, { id: 2, email: 'b@x.io', role: 'admin' }] })).toEqual({
    users: [{ id: 1, email: 'a@x.io', role: 'member' }, { id: 2, email: 'b@x.io', role: 'admin' }],
    skipped: 0,
  });
});
test('skips invalid items', () => {
  const r = parseUsers({ data: [{ id: '1', email: 'a' }, null, { id: 3, email: 'c@x.io', role: 'owner' }, { id: 4, email: 'd@x.io' }] });
  expect(r.users.map((u) => u.id)).toEqual([4]);
  expect(r.skipped).toBe(3);
});
test('rejects the wrong overall shape', () => {
  for (const bad of [null, [], { data: 'x' }, { users: [] }]) expect(() => parseUsers(bad)).toThrow('Unexpected response shape');
});
