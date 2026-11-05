function pascal(rows) {
  const out = [];
  for (let r = 0; r < rows; r++) {
    const prev = out[r - 1];
    const row = [1];
    for (let i = 1; i < r; i++) row.push(prev[i - 1] + prev[i]);
    if (r > 0) row.push(1);
    out.push(row);
  }
  return out;
}
