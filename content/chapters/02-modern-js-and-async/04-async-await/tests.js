function makeFakeFetch({ failing = [], ms = 40 } = {}) {
  const calls = [];
  const fetchUser = (id) => {
    calls.push(id);
    return new Promise((resolve, reject) =>
      setTimeout(() => (failing.includes(id) ? reject(new Error(`User ${id} failed`)) : resolve({ id, name: `user-${id}` })), ms),
    );
  };
  return { fetchUser, calls };
}

test('returns names in order', async () => {
  const { fetchUser } = makeFakeFetch();
  expect(await getUserNames([3, 1, 2], fetchUser)).toEqual(['user-3', 'user-1', 'user-2']);
});

test('fetches in parallel', async () => {
  const { fetchUser } = makeFakeFetch({ ms: 60 });
  const start = Date.now();
  await getUserNames([1, 2, 3, 4, 5], fetchUser);
  expect(Date.now() - start).toBeLessThan(200);
});

test('firstAvailable returns the first user that loads', async () => {
  const { fetchUser, calls } = makeFakeFetch({ failing: [1, 2], ms: 5 });
  expect(await firstAvailable([1, 2, 3, 4], fetchUser)).toEqual({ id: 3, name: 'user-3' });
  expect(calls).toEqual([1, 2, 3]);
});

test('firstAvailable throws when everything fails', async () => {
  const { fetchUser } = makeFakeFetch({ failing: [1, 2], ms: 5 });
  await expect(firstAvailable([1, 2], fetchUser)).rejects.toThrow('No users available');
});
