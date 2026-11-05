function debounce(fn, ms, timers = { setTimeout, clearTimeout }) {
  const debounced = (...args) => fn(...args);
  debounced.flush = () => {};
  debounced.cancel = () => {};
  return debounced;
}
