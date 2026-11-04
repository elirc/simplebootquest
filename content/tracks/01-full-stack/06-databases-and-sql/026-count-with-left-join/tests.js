test('includes members with zero loans', () => {
  expect(result).toEqual([
    { name: 'Ada', loans: 3 },
    { name: 'Grace', loans: 2 },
    { name: 'Linus', loans: 1 },
    { name: 'Margaret', loans: 0 },
  ]);
});
