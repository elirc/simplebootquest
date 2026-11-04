const inc = (n) => n + 1;
const dbl = (n) => n * 2;

test('pipe applies left to right', () => {
  expect(pipe(inc, dbl)(3)).toBe(8);
  expect(pipe()(5)).toBe(5);
});

test('compose applies right to left', () => {
  expect(compose(inc, dbl)(3)).toBe(7);
});

test('normaliseEmail', () => {
  expect(normaliseEmail(' Ada+news@Example.com ')).toBe('ada@example.com');
  expect(normaliseEmail('grace@navy.mil')).toBe('grace@navy.mil');
});
