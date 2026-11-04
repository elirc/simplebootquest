function totalStock(stock) {
  return Object.values(stock).reduce((sum, n) => sum + n, 0);
}

function inStock(stock) {
  return Object.keys(stock)
    .filter((name) => stock[name] > 0)
    .sort();
}

function mapValues(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k)]));
}

function filterObject(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => predicate(v, k)));
}
