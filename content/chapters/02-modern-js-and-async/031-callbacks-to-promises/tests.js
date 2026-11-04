function getUser(id, cb) {
  setTimeout(() => (id === 1 ? cb(null, { id, name: 'Ada' }) : cb(new Error('Not found'))), 5);
}

test('promisify resolves', async () => {
  const add = (a, b, cb) => setTimeout(() => cb(null, a + b), 1);
  await expect(promisify(add)(2, 3)).resolves.toBe(5);
});

test('promisify rejects', async () => {
  const fail = (cb) => cb(new Error('nope'));
  await expect(promisify(fail)()).rejects.toThrow('nope');
});

test('loadUserName', async () => {
  await expect(loadUserName(1)).resolves.toBe('ADA');
  await expect(loadUserName(2)).rejects.toThrow('Not found');
});
