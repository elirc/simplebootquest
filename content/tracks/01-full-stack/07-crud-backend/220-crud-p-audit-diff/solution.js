function same(a, b) {
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (a !== null && b !== null && typeof a === 'object' && typeof b === 'object') return JSON.stringify(a) === JSON.stringify(b);
  return Object.is(a, b);
}

function diff(before, after, { ignore = ['updatedAt'] } = {}) {
  const keys = [...new Set([...Object.keys(before), ...Object.keys(after)])].sort();
  return keys
    .filter((k) => !ignore.includes(k) && !same(before[k], after[k]))
    .map((field) => ({ field, from: before[field], to: after[field] }));
}
