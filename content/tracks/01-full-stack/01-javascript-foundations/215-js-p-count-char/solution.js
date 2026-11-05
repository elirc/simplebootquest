function countChar(text, ch) {
  const target = ch.toLowerCase();
  let n = 0;
  for (const c of text.toLowerCase()) if (c === target) n++;
  return n;
}

function mostCommonChar(text) {
  const counts = new Map();
  let best = null;
  for (const c of text.toLowerCase()) {
    if (!/[a-z]/.test(c)) continue;
    const n = (counts.get(c) ?? 0) + 1;
    counts.set(c, n);
    if (best === null || n > counts.get(best)) best = c;
  }
  return best;
}
