test('parseAge', () => {
  expect(parseAge('42')).toBe(42);
  expect(() => parseAge('abc')).toThrow(TypeError);
  expect(() => parseAge('abc')).toThrow('Age must be a number');
  expect(() => parseAge('200')).toThrow(RangeError);
});

test('safeDivide', () => {
  expect(safeDivide(10, 4)).toEqual({ ok: true, value: 2.5 });
  expect(safeDivide(1, 0)).toEqual({ ok: false, error: 'Cannot divide by zero' });
});

test('withCleanup always logs', () => {
  const logs = [];
  expect(withCleanup(() => 5, (m) => logs.push(m))).toBe(5);
  expect(() => withCleanup(() => { throw new Error('boom'); }, (m) => logs.push(m))).toThrow('boom');
  expect(logs).toEqual(['done', 'done']);
});
