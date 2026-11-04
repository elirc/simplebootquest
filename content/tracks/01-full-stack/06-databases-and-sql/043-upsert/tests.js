test('keeps the best score per player', () => {
  expect(query('SELECT player, score, updated_on FROM high_scores ORDER BY player')).toEqual([
    { player: 'Ada', score: 70, updated_on: '2026-03-05' },
    { player: 'Grace', score: 80, updated_on: '2026-01-01' },
    { player: 'Linus', score: 40, updated_on: '2026-03-05' },
  ]);
});
