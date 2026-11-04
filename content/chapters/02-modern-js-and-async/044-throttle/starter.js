function throttle(fn, ms, now = Date.now) {
  return (...args) => fn(...args);
}
