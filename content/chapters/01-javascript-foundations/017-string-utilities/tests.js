test('slugify', () => {
  expect(slugify('Hello World')).toBe('hello-world');
  expect(slugify('  Hello, World! 2026 ')).toBe('hello-world-2026');
  expect(slugify('Ünïcode & stuff')).toBe('n-code-stuff');
});

test('titleCase', () => {
  expect(titleCase('hELLO wORLD')).toBe('Hello World');
  expect(titleCase('a')).toBe('A');
});

test('formatDuration', () => {
  expect(formatDuration(75)).toBe('1:15');
  expect(formatDuration(5)).toBe('0:05');
  expect(formatDuration(600)).toBe('10:00');
});
