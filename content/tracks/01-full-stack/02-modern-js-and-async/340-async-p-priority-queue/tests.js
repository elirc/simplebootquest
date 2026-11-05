test('runs by priority, one at a time', async () => {
  const q = createPriorityQueue();
  const log = [];
  const task = (name, ms = 5) => async () => { log.push(`start ${name}`); await sleep(ms); log.push(`end ${name}`); return name; };
  const first = q.add(task('first', 20));
  await sleep(1);
  q.add(task('low'), 0);
  q.add(task('high'), 10);
  q.add(task('mid'), 5);
  await q.onIdle();
  expect(await first).toBe('first');
  expect(log.filter((l) => l.startsWith('start'))).toEqual(['start first', 'start high', 'start mid', 'start low']);
});
test('failures are isolated', async () => {
  const q = createPriorityQueue();
  const bad = q.add(async () => { throw new Error('nope'); });
  const good = q.add(async () => 'ok');
  await expect(bad).rejects.toThrow('nope');
  expect(await good).toBe('ok');
});
