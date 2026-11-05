test('mapSeries runs one at a time', async () => {
  let running = 0;
  let max = 0;
  const out = await mapSeries([3, 1, 2], async (n, i) => {
    running++;
    max = Math.max(max, running);
    await sleep(n * 3);
    running--;
    return n * 10 + i;
  });
  expect(out).toEqual([30, 11, 22]);
  expect(max).toBe(1);
});
test('asyncFilter keeps order and runs in parallel', async () => {
  const start = Date.now();
  const out = await asyncFilter([1, 2, 3, 4], async (n) => { await sleep(30); return n % 2 === 0; });
  expect(out).toEqual([2, 4]);
  expect(Date.now() - start).toBeLessThan(90);
});
test('asyncReduce', async () => {
  expect(await asyncReduce([1, 2, 3], async (acc, n) => acc + n, 10)).toBe(16);
});
