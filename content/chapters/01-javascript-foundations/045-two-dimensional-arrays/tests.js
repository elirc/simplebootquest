const _ = null;

test('row, column and diagonal wins', () => {
  expect(winner([['X', 'X', 'X'], [_, 'O', _], ['O', _, _]])).toBe('X');
  expect(winner([['O', 'X', _], ['O', 'X', _], ['O', _, 'X']])).toBe('O');
  expect(winner([['X', 'O', _], ['O', 'X', _], [_, _, 'X']])).toBe('X');
  expect(winner([[_, _, 'O'], ['X', 'O', 'X'], ['O', _, _]])).toBe('O');
});

test('no winner', () => {
  expect(winner([[_, _, _], [_, _, _], [_, _, _]])).toBeNull();
});

test('status', () => {
  expect(status([['X', 'X', 'X'], [_, 'O', _], ['O', _, _]])).toBe('X wins');
  expect(status([['X', 'O', 'X'], ['X', 'O', 'O'], ['O', 'X', 'X']])).toBe('draw');
  expect(status([['X', _, _], [_, _, _], [_, _, _]])).toBe('in progress');
  expect(isFull([['X', 'O', 'X'], ['X', 'O', 'O'], ['O', 'X', 'X']])).toBe(true);
});
