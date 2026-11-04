test('toEmail', () => {
  expect(toEmail('  Ada@Example.COM ')).toBe('ada@example.com');
  expect(toEmail('nope')).toBeNull();
});

test('toPositiveInt', () => {
  expect(toPositiveInt(3)).toBe(3);
  expect(() => toPositiveInt(0)).toThrow(RangeError);
  expect(() => toPositiveInt(1.5)).toThrow(RangeError);
});

test('toSlug', () => {
  expect(toSlug('hello-world-2')).toBe('hello-world-2');
  for (const bad of ['Hello', '-x', 'x-', 'a--b', 'a b']) expect(toSlug(bad)).toBeNull();
});

test('sendWelcome', () => {
  expect(sendWelcome(toEmail('a@b.co'))).toBe('Welcome email sent to a@b.co');
});
