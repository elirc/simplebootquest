test('parseAccept sorts by quality', () => {
  expect(parseAccept('application/json;q=0.9, text/html, */*;q=0.1')).toEqual([
    { type: 'text/html', q: 1 },
    { type: 'application/json', q: 0.9 },
    { type: '*/*', q: 0.1 },
  ]);
});

test('more specific types win ties', () => {
  expect(parseAccept('*/*, text/*, text/plain').map((r) => r.type)).toEqual(['text/plain', 'text/*', '*/*']);
});

test('missing header accepts anything', () => {
  expect(parseAccept(undefined)).toEqual([{ type: '*/*', q: 1 }]);
});

test('negotiate', () => {
  expect(negotiate('text/html, application/json;q=0.9', ['application/json', 'text/html'])).toBe('text/html');
  expect(negotiate('application/*', ['text/html', 'application/json'])).toBe('application/json');
  expect(negotiate('*/*', ['application/json', 'text/html'])).toBe('application/json');
  expect(negotiate('image/png', ['application/json'])).toBeNull();
  expect(negotiate('application/json;q=0', ['application/json'])).toBeNull();
});
