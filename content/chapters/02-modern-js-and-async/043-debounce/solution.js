function debounce(fn, ms) {
  let timer = null;
  let pendingArgs = null;

  const debounced = (...args) => {
    pendingArgs = args;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      const a = pendingArgs;
      pendingArgs = null;
      fn(...a);
    }, ms);
  };

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
    pendingArgs = null;
  };

  debounced.flush = () => {
    if (!pendingArgs) return;
    const a = pendingArgs;
    debounced.cancel();
    fn(...a);
  };

  return debounced;
}
