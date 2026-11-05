test('returns the name', async () => {
  const api = { getUser: async () => ({ name: 'Ada' }) };
  expect(await getDisplayName(api, 1)).toBe('Ada');
});
