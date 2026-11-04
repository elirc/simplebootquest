test('top book per genre', () => {
  expect(result).toEqual([
    { genre: 'fantasy', title: 'Guards! Guards!', pages: 416 },
    { genre: 'literary', title: 'Americanah', pages: 588 },
    { genre: 'sci-fi', title: 'The Dispossessed', pages: 387 },
  ]);
});

test('uses a window function', () => {
  expect(/over\s*\(/i.test(code)).toBe(true);
});
