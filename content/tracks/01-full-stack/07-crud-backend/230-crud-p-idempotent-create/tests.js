test('first create is 201', () => {
  const s = createStore();
  expect(s.create(1, { clientId: 'abc', title: 'Milk' })).toEqual({ status: 201, todo: { id: 1, userId: 1, clientId: 'abc', title: 'Milk' } });
});
test('retries return the original', () => {
  const s = createStore();
  s.create(1, { clientId: 'abc', title: 'Milk' });
  expect(s.create(1, { clientId: 'abc', title: 'Milk' })).toEqual({ status: 200, todo: { id: 1, userId: 1, clientId: 'abc', title: 'Milk' } });
  expect(s.count()).toBe(1);
});
test('conflicting data is a 409', () => {
  const s = createStore();
  s.create(1, { clientId: 'abc', title: 'Milk' });
  expect(s.create(1, { clientId: 'abc', title: 'Eggs' })).toEqual({ status: 409, error: 'clientId already used with different data' });
  expect(s.count()).toBe(1);
});
test('scoped per user', () => {
  const s = createStore();
  s.create(1, { clientId: 'abc', title: 'Milk' });
  expect(s.create(2, { clientId: 'abc', title: 'Milk' }).status).toBe(201);
  expect(s.count()).toBe(2);
});
test('no clientId always creates', () => {
  const s = createStore();
  s.create(1, { title: 'A' });
  expect(s.create(1, { title: 'A' }).status).toBe(201);
  expect(s.count()).toBe(2);
});
