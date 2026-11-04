test('counts categories with CASE', () => {
  expect(result).toEqual([
    { genre: 'fantasy', short: 1, long: 3, total: 4 },
    { genre: 'literary', short: 1, long: 2, total: 3 },
    { genre: 'sci-fi', short: 2, long: 2, total: 4 },
  ]);
});
