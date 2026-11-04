test('records calls', () => {
  const m = fn();
  m(1, 2);
  m('a');
  expect(m.mock.calls).toEqual([[1, 2], ['a']]);
  expect(m.mock.lastCall).toEqual(['a']);
  expect(m.mock.results).toEqual([undefined, undefined]);
});

test('uses the implementation', () => {
  const m = fn((a, b) => a + b);
  expect(m(2, 3)).toBe(5);
  expect(m.mock.results).toEqual([5]);
});

test('mockReturnValue is chainable', () => {
  const m = fn().mockReturnValue(42);
  expect(m()).toBe(42);
  expect(m()).toBe(42);
});

test('mockReturnValueOnce queues values', () => {
  const m = fn(() => 'default').mockReturnValueOnce('first').mockReturnValueOnce('second');
  expect([m(), m(), m()]).toEqual(['first', 'second', 'default']);
});

test('mockImplementation replaces behaviour', () => {
  const m = fn(() => 1).mockImplementation(() => 2);
  expect(m()).toBe(2);
});

test('mockReset clears everything', () => {
  const m = fn(() => 1).mockReturnValue(5).mockReturnValueOnce(9);
  m();
  m.mockReset();
  expect(m.mock.calls).toEqual([]);
  expect(m()).toBeUndefined();
  expect(m.mock.lastCall).toEqual([]);
});

test('lastCall is undefined before any call', () => {
  expect(fn().mock.lastCall).toBeUndefined();
});
