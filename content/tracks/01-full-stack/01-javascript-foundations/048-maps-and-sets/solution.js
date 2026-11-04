function commonTags(a, b) {
  const inB = new Set(b);
  return [...new Set(a.filter((tag) => inB.has(tag)))];
}

function countBy(items, keyFn) {
  const counts = new Map();
  for (const item of items) {
    const key = keyFn(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function mostFrequent(items) {
  const counts = new Map();
  let best;
  let bestCount = 0;
  for (const item of items) {
    const c = (counts.get(item) ?? 0) + 1;
    counts.set(item, c);
    if (c > bestCount) {
      best = item;
      bestCount = c;
    }
  }
  return best;
}
