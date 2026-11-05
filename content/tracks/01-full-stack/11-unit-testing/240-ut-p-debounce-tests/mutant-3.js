// mutant: fires one tick early
function debounce(fn, ms, timers) {
  let timer = null;
  let lastArgs;
  return (...args) => {
    lastArgs = args;
    if (timer !== null) timers.clearTimeout(timer);
    timer = timers.setTimeout(() => {
      timer = null;
      fn(...lastArgs);
    }, ms - 1);
  };
}
