function fakeTimers() {
  let now = 0;
  let nextId = 1;
  const pending = new Map();
  return {
    setTimeout: (cb, ms) => { const id = nextId++; pending.set(id, { cb, at: now + ms }); return id; },
    clearTimeout: (id) => pending.delete(id),
    advance(ms) {
      now += ms;
      for (const [id, t] of [...pending].sort((a, b) => a[1].at - b[1].at)) {
        if (t.at <= now) { pending.delete(id); t.cb(); }
      }
    },
    count: () => pending.size,
  };
}
test('calls once after the pause, with the latest args', () => {
  const t = fakeTimers();
  const fn = vi.fn();
  const search = debounce(fn, 300, t);
  search('r');
  t.advance(100);
  search('re');
  t.advance(100);
  search('react');
  t.advance(299);
  expect(fn).not.toHaveBeenCalled();
  t.advance(1);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledWith('react');
});
test('only one timer at a time', () => {
  const t = fakeTimers();
  const d = debounce(() => {}, 100, t);
  d(); d(); d();
  expect(t.count()).toBe(1);
});
test('flush runs immediately', () => {
  const t = fakeTimers();
  const fn = vi.fn();
  const d = debounce(fn, 100, t);
  d('a', 1);
  d.flush();
  expect(fn).toHaveBeenCalledWith('a', 1);
  t.advance(200);
  expect(fn).toHaveBeenCalledTimes(1);
  d.flush();
  expect(fn).toHaveBeenCalledTimes(1);
});
test('cancel drops the call', () => {
  const t = fakeTimers();
  const fn = vi.fn();
  const d = debounce(fn, 100, t);
  d('x');
  d.cancel();
  t.advance(500);
  expect(fn).not.toHaveBeenCalled();
});
