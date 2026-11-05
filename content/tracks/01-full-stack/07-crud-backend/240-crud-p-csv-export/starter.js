function toCsv(rows, columns) {
  const lines = [columns.map((c) => c.header).join(',')];
  for (const row of rows) lines.push(columns.map((c) => row[c.key]).join(','));
  return lines.join('\n');
}
