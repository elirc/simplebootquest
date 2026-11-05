function deferred() {
  let resolve, reject;
  const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}
test('counts active work', async () => {
  const t = createTracker();
  const a = deferred();
  const b = deferred();
  t.track(a.promise);
  t.track(b.promise);
  expect(t.active()).toBe(2);
  a.resolve(1);
  await a.promise;
  await sleep(0);
  expect(t.active()).toBe(1);
});
test('track returns the original promise', async () => {
  const t = createTracker();
  expect(await t.track(Promise.resolve(42))).toBe(42);
});
test('drain waits for in-flight work', async () => {
  const t = createTracker();
  const d = deferred();
  t.track(d.promise);
  let drained = false;
  const done = t.drain().then(() => { drained = true; });
  await sleep(5);
  expect(drained).toBe(false);
  d.resolve();
  await done;
  expect(drained).toBe(true);
  expect(t.active()).toBe(0);
});
test('failed work still lets drain finish', async () => {
  const t = createTracker();
  const d = deferred();
  t.track(d.promise).catch(() => {});
  const done = t.drain();
  d.reject(new Error('request failed'));
  await expect(done).resolves.toBeUndefined();
});
test('refuses new work while draining', async () => {
  const t = createTracker();
  await t.drain();
  expect(() => t.track(Promise.resolve())).toThrow('Shutting down');
});
