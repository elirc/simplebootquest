function myMap(items, fn) {
  const out = [];
  for (let i = 0; i < items.length; i++) out.push(fn(items[i], i));
  return out;
}

function myFilter(items, predicate) {
  const out = [];
  for (const item of items) {
    if (predicate(item)) out.push(item);
  }
  return out;
}

function not(predicate) {
  return (...args) => !predicate(...args);
}

function times(n, fn) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(fn(i));
  return out;
}
