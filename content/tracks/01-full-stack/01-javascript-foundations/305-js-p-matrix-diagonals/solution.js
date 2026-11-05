function diagonalSums(m) {
  let main = 0;
  let anti = 0;
  const n = m.length;
  for (let i = 0; i < n; i++) {
    main += m[i][i];
    anti += m[i][n - 1 - i];
  }
  return { main, anti };
}

function rotateClockwise(m) {
  const n = m.length;
  return Array.from({ length: n }, (_, r) => Array.from({ length: n }, (_, c) => m[n - 1 - c][r]));
}
