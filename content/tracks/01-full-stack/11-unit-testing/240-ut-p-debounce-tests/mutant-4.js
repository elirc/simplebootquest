// mutant: only clears when no timer is pending
function debounce(fn, ms, timers) {
  let timer = null;
  let lastArgs;
  return (...args) => {
    lastArgs = args;
    if (timer === null) timers.clearTimeout(timer);
    timer = timers.setTimeout(() => {
      timer = null;
      fn(...lastArgs);
    }, ms);
  };
}
