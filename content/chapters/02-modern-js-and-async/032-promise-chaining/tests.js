const api = {
  getUser: (id) => (id === 1 ? Promise.resolve({ id: 1 }) : Promise.reject(new Error('no user'))),
  getPosts: (userId) => Promise.resolve(userId === 1 ? ['a', 'b', 'c'] : []),
};

test('postCount chains', async () => {
  await expect(postCount(1, api)).resolves.toBe(3);
  await expect(postCount(2, api)).rejects.toThrow('no user');
});

test('safePostCount recovers', async () => {
  await expect(safePostCount(2, api)).resolves.toBe(0);
});

test('withFallback', async () => {
  await expect(withFallback(Promise.resolve(5), 0)).resolves.toBe(5);
  await expect(withFallback(Promise.reject(new Error('x')), 'fb')).resolves.toBe('fb');
});
