function fakeTimers() {
  let now = 0;
  let id = 0;
  const pending = new Map();
  return {
    setTimeout: (cb, ms) => { pending.set(++id, { cb, at: now + ms }); return id; },
    clearTimeout: (i) => pending.delete(i),
    advance(ms) {
      now += ms;
      for (const [i, t] of [...pending]) if (t.at <= now) { pending.delete(i); t.cb(); }
    },
  };
}
test('waits for the full delay', () => {
  const t = fakeTimers();
  const fn = vi.fn();
  const d = debounce(fn, 100, t);
  d('a');
  t.advance(99);
  expect(fn).not.toHaveBeenCalled();
  t.advance(1);
  expect(fn).toHaveBeenCalledTimes(1);
});
test('rapid calls collapse into one, with the latest args', () => {
  const t = fakeTimers();
  const fn = vi.fn();
  const d = debounce(fn, 100, t);
  d('a');
  t.advance(50);
  d('b', 2);
  t.advance(50);
  d('c', 3);
  t.advance(100);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledWith('c', 3);
});
test('the timer restarts on each call', () => {
  const t = fakeTimers();
  const fn = vi.fn();
  const d = debounce(fn, 100, t);
  d();
  t.advance(80);
  d();
  t.advance(80);
  expect(fn).not.toHaveBeenCalled();
  t.advance(20);
  expect(fn).toHaveBeenCalledTimes(1);
});
test('works again after firing', () => {
  const t = fakeTimers();
  const fn = vi.fn();
  const d = debounce(fn, 100, t);
  d(1);
  t.advance(100);
  d(2);
  t.advance(100);
  expect(fn).toHaveBeenCalledTimes(2);
  expect(fn).toHaveBeenCalledWith(2);
});
