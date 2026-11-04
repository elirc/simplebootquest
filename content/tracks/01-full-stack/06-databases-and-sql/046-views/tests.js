test('the view exists', () => {
  expect(query("SELECT name FROM sqlite_master WHERE type = 'view'")).toEqual([{ name: 'author_stats' }]);
});

test('selects from the view', () => {
  expect(result).toEqual([
    { author: 'Terry Pratchett', books: 3, total_pages: 1210, latest_year: 2004 },
    { author: 'Haruki Murakami', books: 2, total_pages: 801, latest_year: 2002 },
    { author: 'Octavia E. Butler', books: 2, total_pages: 609, latest_year: 1993 },
    { author: 'Ursula K. Le Guin', books: 3, total_pages: 856, latest_year: 1974 },
  ]);
});
