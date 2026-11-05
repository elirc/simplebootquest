// mutant: old timers are not cleared
function debounce(fn, ms, timers) {
  let timer = null;
  let lastArgs;
  return (...args) => {
    lastArgs = args;
    timer = timers.setTimeout(() => {
      timer = null;
      fn(...lastArgs);
    }, ms);
  };
}
