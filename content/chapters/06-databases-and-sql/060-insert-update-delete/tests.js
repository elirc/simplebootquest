test('inserts Margaret', () => {
  expect(query("SELECT name, email FROM members WHERE email = 'margaret@example.com'")).toEqual([
    { name: 'Margaret', email: 'margaret@example.com' },
  ]);
  expect(query('SELECT COUNT(*) AS n FROM members')[0].n).toBe(4);
});

test('returns loan 2', () => {
  expect(query('SELECT returned_on FROM loans WHERE id = 2')[0].returned_on).toBe('2026-03-01');
});

test('deletes only old returned loans', () => {
  expect(query('SELECT id FROM loans ORDER BY id').map((r) => r.id)).toEqual([2, 4, 5, 6]);
});
