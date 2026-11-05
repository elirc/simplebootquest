function debounce(fn, ms, timers = { setTimeout, clearTimeout }) {
  let timer = null;
  let pendingArgs = null;
  const run = () => {
    timer = null;
    const args = pendingArgs;
    pendingArgs = null;
    fn(...args);
  };
  const debounced = (...args) => {
    pendingArgs = args;
    if (timer !== null) timers.clearTimeout(timer);
    timer = timers.setTimeout(run, ms);
  };
  debounced.flush = () => {
    if (timer === null) return;
    timers.clearTimeout(timer);
    run();
  };
  debounced.cancel = () => {
    if (timer !== null) timers.clearTimeout(timer);
    timer = null;
    pendingArgs = null;
  };
  return debounced;
}
