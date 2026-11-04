function unique(array) {
  return [...new Set(array)];
}

function chunk(array, size) {
  const out = [];
  for (let i = 0; i < array.length; i += size) out.push(array.slice(i, i + size));
  return out;
}

function range(start, end, step = 1) {
  const out = [];
  for (let n = start; n < end; n += step) out.push(n);
  return out;
}

function zip(a, b) {
  const length = Math.min(a.length, b.length);
  const out = [];
  for (let i = 0; i < length; i++) out.push([a[i], b[i]]);
  return out;
}

function partition(array, predicate) {
  const pass = [];
  const fail = [];
  for (const item of array) (predicate(item) ? pass : fail).push(item);
  return [pass, fail];
}
