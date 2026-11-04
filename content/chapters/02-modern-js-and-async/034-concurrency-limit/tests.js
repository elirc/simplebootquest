function tracker() {
  let running = 0;
  let max = 0;
  const fn = async (item) => {
    running++;
    max = Math.max(max, running);
    await new Promise((r) => setTimeout(r, 5 + (item % 3) * 5));
    running--;
    return item * 2;
  };
  return { fn, max: () => max };
}

test('respects the limit and keeps order', async () => {
  const t = tracker();
  const out = await mapWithLimit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, t.fn);
  expect(out).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  expect(t.max()).toBe(3);
});

test('handles fewer items than the limit', async () => {
  const t = tracker();
  expect(await mapWithLimit([1, 2], 10, t.fn)).toEqual([2, 4]);
  expect(await mapWithLimit([], 2, t.fn)).toEqual([]);
});

test('rejects if any call fails', async () => {
  const fn = async (n) => {
    if (n === 3) throw new Error('bad item');
    return n;
  };
  await expect(mapWithLimit([1, 2, 3, 4], 2, fn)).rejects.toThrow('bad item');
});
