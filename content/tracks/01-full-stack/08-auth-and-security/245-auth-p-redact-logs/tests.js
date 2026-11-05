test('redacts matching keys deeply', () => {
  const input = { user: { email: 'a@x.io', password: 'hunter2' }, headers: { Authorization: 'Bearer abc', 'x-request-id': '1' } };
  expect(redact(input)).toEqual({ user: { email: 'a@x.io', password: '[REDACTED]' }, headers: { Authorization: '[REDACTED]', 'x-request-id': '1' } });
});
test('substring matches', () => expect(redact({ accessToken: 't', passwordConfirm: 'p', tokenizer: 'x', name: 'n' })).toEqual({
  accessToken: '[REDACTED]', passwordConfirm: '[REDACTED]', tokenizer: '[REDACTED]', name: 'n',
}));
test('arrays', () => expect(redact([{ token: 1 }, 'plain', [{ secret: 2 }]])).toEqual([{ token: '[REDACTED]' }, 'plain', [{ secret: '[REDACTED]' }]]));
test('circular references', () => {
  const a = { name: 'a' };
  a.self = a;
  expect(redact(a)).toEqual({ name: 'a', self: '[Circular]' });
});
test('shared (non-circular) references are fine', () => {
  const shared = { v: 1 };
  expect(redact({ x: shared, y: shared })).toEqual({ x: { v: 1 }, y: { v: 1 } });
});
test('primitives and dates', () => {
  const d = new Date(0);
  expect(redact(5)).toBe(5);
  expect(redact(null)).toBe(null);
  expect(redact({ d }).d).toBe(d);
});
test('does not mutate', () => {
  const input = { password: 'x' };
  redact(input);
  expect(input.password).toBe('x');
});
