function emitter() {
  const listeners = new Map();
  return {
    on(ev, fn) { listeners.set(ev, [...(listeners.get(ev) ?? []), fn]); return () => listeners.set(ev, listeners.get(ev).filter((f) => f !== fn)); },
    emit(ev, p) { (listeners.get(ev) ?? []).forEach((f) => f(p)); },
    count(ev) { return (listeners.get(ev) ?? []).length; },
  };
}
test('deferred', async () => {
  const d = createDeferred();
  expect(d.settled()).toBe(false);
  setTimeout(() => d.resolve(42), 5);
  expect(await d.promise).toBe(42);
  expect(d.settled()).toBe(true);
});
test('waitForEvent resolves and unsubscribes', async () => {
  const e = emitter();
  const p = waitForEvent(e, 'ready', 100);
  setTimeout(() => e.emit('ready', { ok: true }), 5);
  expect(await p).toEqual({ ok: true });
  expect(e.count('ready')).toBe(0);
});
test('waitForEvent times out and unsubscribes', async () => {
  const e = emitter();
  await expect(waitForEvent(e, 'never', 20)).rejects.toThrow('Timed out waiting for never');
  expect(e.count('never')).toBe(0);
});
