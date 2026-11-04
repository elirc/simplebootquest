test('summarises authors with more than one book', () => {
  expect(result).toEqual([
    { author: 'Terry Pratchett', books: 3, total_pages: 1210 },
    { author: 'Ursula K. Le Guin', books: 3, total_pages: 856 },
    { author: 'Haruki Murakami', books: 2, total_pages: 801 },
    { author: 'Octavia E. Butler', books: 2, total_pages: 609 },
  ]);
});
