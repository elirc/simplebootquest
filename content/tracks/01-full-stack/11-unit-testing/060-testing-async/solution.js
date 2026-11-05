const apiReturning = (user) => ({ getUser: async () => user });
const apiFailing = (status, message = 'boom') => ({
  getUser: async () => {
    throw Object.assign(new Error(message), { status });
  },
});

describe('getDisplayName', () => {
  test('prefers the nickname', async () => {
    expect(await getDisplayName(apiReturning({ name: 'Ada Lovelace', nickname: 'Ada' }), 1)).toBe('Ada');
  });

  test('falls back to the name', async () => {
    expect(await getDisplayName(apiReturning({ name: 'Grace' }), 1)).toBe('Grace');
  });

  test('passes the id to the api', async () => {
    const api = { getUser: vi.fn().mockResolvedValue({ name: 'x' }) };
    await getDisplayName(api, 42);
    expect(api.getUser).toHaveBeenCalledWith(42);
  });

  test('handles missing users', async () => {
    expect(await getDisplayName(apiFailing(404), 1)).toBe('Unknown user');
  });

  test('rethrows other errors', async () => {
    await expect(getDisplayName(apiFailing(500, 'Server error'), 1)).rejects.toThrow('Server error');
  });
});
