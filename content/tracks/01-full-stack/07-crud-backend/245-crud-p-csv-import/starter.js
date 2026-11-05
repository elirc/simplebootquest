function parseCsv(text) {
  const [header, ...lines] = text.split('\n');
  const keys = header.split(',');
  return lines.map((line) => Object.fromEntries(line.split(',').map((v, i) => [keys[i], v])));
}
