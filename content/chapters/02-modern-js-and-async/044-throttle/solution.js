function throttle(fn, ms, now = Date.now) {
  let last = -Infinity;
  return (...args) => {
    const t = now();
    if (t - last < ms) return undefined;
    last = t;
    return fn(...args);
  };
}
