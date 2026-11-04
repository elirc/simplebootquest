test('monthly report', () => {
  expect(result).toEqual([
    { member: 'Ada', total_loans: 3, active: 2, favourite_genre: 'fantasy', pages_read: 183 },
    { member: 'Grace', total_loans: 2, active: 1, favourite_genre: 'fantasy', pages_read: 416 },
    { member: 'Linus', total_loans: 1, active: 1, favourite_genre: 'fantasy', pages_read: 0 },
    { member: 'Margaret', total_loans: 0, active: 0, favourite_genre: null, pages_read: 0 },
  ]);
});
