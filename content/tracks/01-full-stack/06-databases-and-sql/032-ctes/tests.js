test('loans per genre', () => {
  expect(result).toEqual([
    { genre: 'fantasy', loan_count: 4 },
    { genre: 'literary', loan_count: 1 },
    { genre: 'sci-fi', loan_count: 1 },
  ]);
});
