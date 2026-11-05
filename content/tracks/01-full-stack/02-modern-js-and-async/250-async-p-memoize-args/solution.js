function memoize(fn, { maxSize = Infinity } = {}) {
  const cache = new Map();
  const memo = (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }
    const value = fn(...args);
    cache.set(key, value);
    if (cache.size > maxSize) cache.delete(cache.keys().next().value);
    return value;
  };
  memo.size = () => cache.size;
  return memo;
}
