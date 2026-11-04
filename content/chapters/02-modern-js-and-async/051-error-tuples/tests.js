const api = {
  getUser: async (id) => { if (id === 404) throw new Error('nope'); return { id }; },
  getSettings: async (id) => { if (id === 2) throw new Error('settings down'); return { theme: 'dark' }; },
};

test('to returns tuples', async () => {
  expect(await to(Promise.resolve(5))).toEqual([null, 5]);
  const [err, value] = await to(Promise.reject(new Error('x')));
  expect(err.message).toBe('x');
  expect(value).toBeUndefined();
});

test('loadProfile handles each failure differently', async () => {
  expect(await loadProfile(api, 1)).toEqual({ user: { id: 1 }, settings: { theme: 'dark' } });
  expect(await loadProfile(api, 2)).toEqual({ user: { id: 2 }, settings: { theme: 'light' } });
  expect(await loadProfile(api, 404)).toEqual({ error: 'User not found' });
});
