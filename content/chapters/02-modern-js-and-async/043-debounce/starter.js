function debounce(fn, ms) {
  return (...args) => fn(...args);
}
