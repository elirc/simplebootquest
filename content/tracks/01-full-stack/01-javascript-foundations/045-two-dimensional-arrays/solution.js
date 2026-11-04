const LINES = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]],
];

function winner(board) {
  for (const [a, b, c] of LINES) {
    const v = board[a[0]][a[1]];
    if (v && v === board[b[0]][b[1]] && v === board[c[0]][c[1]]) return v;
  }
  return null;
}

function isFull(board) {
  return board.every((row) => row.every((cell) => cell !== null));
}

function status(board) {
  const w = winner(board);
  if (w) return `${w} wins`;
  return isFull(board) ? 'draw' : 'in progress';
}
