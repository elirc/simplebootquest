test('escapeRegExp', () => {
  expect(escapeRegExp('a.b*c')).toBe('a\\.b\\*c');
  expect(escapeRegExp('(1+1)?')).toBe('\\(1\\+1\\)\\?');
  expect(new RegExp(escapeRegExp('[x]')).test('[x]')).toBe(true);
});
test('highlights every match, keeping case', () => {
  const el = render(<Highlight text="React is reactive" query="react" />);
  expect(findAll(el, 'mark').map(text)).toEqual(['React', 'react']);
  expect(text(el)).toBe('React is reactive');
});
test('plain parts are strings', () => {
  const el = render(<Highlight text="buy milk" query="milk" />);
  expect(el.children).toEqual(['buy ', { type: 'mark', props: {}, children: ['milk'] }]);
});
test('regex characters are literal', () => {
  const el = render(<Highlight text="Costs $5.00 (approx.)" query="(approx.)" />);
  expect(findAll(el, 'mark').map(text)).toEqual(['(approx.)']);
  expect(findAll(render(<Highlight text="abc" query="." />), 'mark')).toEqual([]);
});
test('empty query', () => {
  const el = render(<Highlight text="hello" query="  " />);
  expect(findAll(el, 'mark')).toEqual([]);
  expect(text(el)).toBe('hello');
});
