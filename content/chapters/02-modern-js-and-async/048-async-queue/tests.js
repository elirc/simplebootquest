test('runs tasks one at a time, in order', async () => {
  const q = createQueue();
  const log = [];
  const task = (name, ms) => async () => {
    log.push(`start ${name}`);
    await sleep(ms);
    log.push(`end ${name}`);
    return name;
  };
  const results = await Promise.all([q.add(task('a', 20)), q.add(task('b', 5)), q.add(task('c', 1))]);
  expect(results).toEqual(['a', 'b', 'c']);
  expect(log).toEqual(['start a', 'end a', 'start b', 'end b', 'start c', 'end c']);
});

test('a failing task does not block the queue', async () => {
  const q = createQueue();
  const failed = q.add(async () => { throw new Error('nope'); });
  const next = q.add(async () => 'still runs');
  await expect(failed).rejects.toThrow('nope');
  await expect(next).resolves.toBe('still runs');
});

test('size tracks pending tasks', async () => {
  const q = createQueue();
  q.add(() => sleep(10));
  const last = q.add(() => sleep(10));
  expect(q.size()).toBe(2);
  await last;
  await sleep(1);
  expect(q.size()).toBe(0);
});
