test('returns the matching books in order', () => {
  expect(result).toEqual([
    { title: 'Parable of the Sower', genre: 'sci-fi', pages: 345 },
    { title: 'Going Postal', genre: 'fantasy', pages: 394 },
  ]);
});
