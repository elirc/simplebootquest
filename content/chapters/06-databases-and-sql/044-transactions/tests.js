test('first transfer committed, second rolled back', () => {
  expect(query('SELECT id, balance FROM accounts ORDER BY id')).toEqual([{ id: 1, balance: 70 }, { id: 2, balance: 80 }]);
  expect(query('SELECT COUNT(*) AS n FROM audit')[0].n).toBe(0);
});

test('balances are conserved', () => {
  expect(query('SELECT SUM(balance) AS total FROM accounts')[0].total).toBe(150);
});
