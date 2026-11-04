test('returns only title and year', () => {
  expect(Object.keys(result[0]).sort()).toEqual(['title', 'year']);
});

test('returns every book', () => {
  expect(result).toHaveLength(11);
});

test('sorts newest first', () => {
  expect(result[0]).toEqual({ title: 'Americanah', year: 2013 });
  expect(result[result.length - 1]).toEqual({ title: 'A Wizard of Earthsea', year: 1968 });
  const years = result.map((r) => r.year);
  expect(years).toEqual([...years].sort((a, b) => b - a));
});
