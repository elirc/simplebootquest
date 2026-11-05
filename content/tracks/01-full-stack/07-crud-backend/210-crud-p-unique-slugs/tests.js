test('slugify basics', () => {
  expect(slugify('My First Post')).toBe('my-first-post');
  expect(slugify('  Hello,   World!!  ')).toBe('hello-world');
  expect(slugify('Crème brûlée & café')).toBe('creme-brulee-cafe');
  expect(slugify('React 19: What’s new?')).toBe('react-19-what-s-new');
});
test('empty slugs', () => {
  expect(slugify('!!!')).toBe('untitled');
  expect(slugify('')).toBe('untitled');
});
test('unique slugs', () => {
  expect(uniqueSlug('Hello', new Set())).toBe('hello');
  expect(uniqueSlug('Hello', new Set(['hello']))).toBe('hello-2');
  expect(uniqueSlug('Hello!', new Set(['hello', 'hello-2', 'hello-3']))).toBe('hello-4');
});
