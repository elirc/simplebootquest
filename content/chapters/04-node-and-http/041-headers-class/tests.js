test('names are case-insensitive', () => {
  const h = new HttpHeaders({ 'Content-Type': 'application/json' });
  expect(h.get('content-type')).toBe('application/json');
  expect(h.has('CONTENT-TYPE')).toBe(true);
  expect(h.get('x-missing')).toBeNull();
});

test('append vs set', () => {
  const h = new HttpHeaders();
  h.append('Vary', 'Accept');
  h.append('vary', 'Origin');
  expect(h.get('VARY')).toBe('Accept, Origin');
  h.set('Vary', 'Cookie');
  expect(h.get('vary')).toBe('Cookie');
});

test('delete and entries', () => {
  const h = new HttpHeaders({ B: '2', a: '1', C: '3' });
  h.delete('c');
  expect(h.entries()).toEqual([['a', '1'], ['b', '2']]);
});
