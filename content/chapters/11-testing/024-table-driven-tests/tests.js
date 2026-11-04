function capture() {
  const registered = [];
  const register = (name, fn) => registered.push({ name, fn });
  return { registered, register };
}

test('formats names and passes arguments', () => {
  const { registered, register } = capture();
  const seen = [];
  each([[1.9, 'a', { x: 1 }], [2, 'b', [1]]], register)('#%# %i %s %j', (n, s, j) => seen.push([n, s, j]));
  expect(registered.map((r) => r.name)).toEqual(['#0 1 a {"x":1}', '#1 2 b [1]']);
  registered.forEach((r) => r.fn());
  expect(seen).toEqual([[1.9, 'a', { x: 1 }], [2, 'b', [1]]]);
});

test('object cases use $placeholders', () => {
  const { registered, register } = capture();
  let received;
  each([{ a: 1, b: 2, sum: 3 }], register)('$a + $b = $sum (%#)', (row) => (received = row));
  expect(registered.map((r) => r.name)).toEqual(['1 + 2 = 3 (0)']);
  registered[0].fn();
  expect(received).toEqual({ a: 1, b: 2, sum: 3 });
});

test('slugifyCases covers the required cases', () => {
  const inputs = slugifyCases.map(([input]) => input);
  for (const required of ['Hello World', '  Trim me  ', 'C++ & Rust!', '---']) expect(inputs).toContain(required);
  const { registered, register } = capture();
  each(slugifyCases, register)('%s', (input, expected) => expect(slugify(input)).toBe(expected));
  expect(registered.length).toBeGreaterThanOrEqual(4);
  registered.forEach((r) => r.fn());
});
