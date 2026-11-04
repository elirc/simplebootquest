function clock() {
  let t = 0;
  return { now: () => t, advance: (ms) => (t += ms) };
}

test('runs at most once per interval', () => {
  const c = clock();
  const calls = [];
  const t = throttle((x) => { calls.push(x); return x; }, 100, c.now);
  expect(t('a')).toBe('a');
  c.advance(50);
  expect(t('b')).toBeUndefined();
  c.advance(50);
  expect(t('c')).toBe('c');
  c.advance(99);
  t('d');
  expect(calls).toEqual(['a', 'c']);
});

test('separate throttled functions are independent', () => {
  const c = clock();
  const calls = [];
  const a = throttle(() => calls.push('a'), 100, c.now);
  const b = throttle(() => calls.push('b'), 100, c.now);
  a();
  b();
  expect(calls).toEqual(['a', 'b']);
});
