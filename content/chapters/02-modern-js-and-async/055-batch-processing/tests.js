test('processes batches in order with progress', async () => {
  const progress = [];
  let running = 0;
  let maxRunning = 0;
  const results = await processInBatches(
    [1, 2, 3, 4, 5, 6, 7],
    3,
    async (batch, i) => {
      running++;
      maxRunning = Math.max(maxRunning, running);
      await sleep(5);
      running--;
      return `${i}:${batch.join(',')}`;
    },
    (done, total) => progress.push(`${done}/${total}`),
  );
  expect(results).toEqual(['0:1,2,3', '1:4,5,6', '2:7']);
  expect(progress).toEqual(['3/7', '6/7', '7/7']);
  expect(maxRunning).toBe(1);
});

test('no items', async () => {
  expect(await processInBatches([], 10, async () => 'x')).toEqual([]);
});
