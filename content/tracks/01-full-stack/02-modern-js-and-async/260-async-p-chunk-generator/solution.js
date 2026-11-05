function* chunks(iterable, size) {
  let batch = [];
  for (const item of iterable) {
    batch.push(item);
    if (batch.length === size) {
      yield batch;
      batch = [];
    }
  }
  if (batch.length) yield batch;
}

function* idGenerator(prefix) {
  for (let i = 1; ; i++) yield `${prefix}-${i}`;
}

function takeN(iterable, n) {
  const out = [];
  if (n <= 0) return out;
  for (const v of iterable) {
    out.push(v);
    if (out.length === n) break;
  }
  return out;
}
