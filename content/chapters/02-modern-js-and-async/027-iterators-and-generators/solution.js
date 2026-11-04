function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) yield i;
}

function* naturals() {
  let n = 1;
  while (true) yield n++;
}

function take(iterable, n) {
  const out = [];
  if (n <= 0) return out;
  for (const value of iterable) {
    out.push(value);
    if (out.length >= n) break;
  }
  return out;
}

function* mapIter(iterable, fn) {
  for (const value of iterable) yield fn(value);
}
