function countWords(text) {
  const counts = {};
  const trimmed = text.trim();
  if (trimmed === '') return counts;
  for (const word of trimmed.toLowerCase().split(/\s+/)) {
    counts[word] = (counts[word] ?? 0) + 1;
  }
  return counts;
}

function pick(obj, keys) {
  const out = {};
  for (const key of keys) {
    if (key in obj) out[key] = obj[key];
  }
  return out;
}
