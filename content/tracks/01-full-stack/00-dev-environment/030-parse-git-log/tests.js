const LOG = `a1b2c3d Add search to the todos list
9f8e7d6 fix: return 404 for missing todos

  4c5d6e7 feat(api): paginate GET /todos
1a2b3c4 fix(ui): button: keep focus visible
`;
test('parses hashes and messages', () => {
  expect(parseLog(LOG)).toEqual([
    { hash: 'a1b2c3d', message: 'Add search to the todos list' },
    { hash: '9f8e7d6', message: 'fix: return 404 for missing todos' },
    { hash: '4c5d6e7', message: 'feat(api): paginate GET /todos' },
    { hash: '1a2b3c4', message: 'fix(ui): button: keep focus visible' },
  ]);
});
test('empty output', () => expect(parseLog('')).toEqual([]));
test('counts commit types', () => {
  expect(countByType(parseLog(LOG))).toEqual({ other: 1, fix: 2, feat: 1 });
});
