function topWords(text, n) {
  const counts = new Map();
  for (const word of text.toLowerCase().match(/[a-z']+/g) ?? []) counts.set(word, (counts.get(word) ?? 0) + 1);
  return [...counts].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0])).slice(0, n);
}
