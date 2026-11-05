function debounceAsync(fn, ms) {
  let timer = null;
  let waiters = [];
  let latestArgs;
  return (...args) => {
    latestArgs = args;
    clearTimeout(timer);
    const promise = new Promise((resolve, reject) => waiters.push({ resolve, reject }));
    timer = setTimeout(async () => {
      const current = waiters;
      waiters = [];
      try {
        const result = await fn(...latestArgs);
        current.forEach((w) => w.resolve(result));
      } catch (err) {
        current.forEach((w) => w.reject(err));
      }
    }, ms);
    return promise;
  };
}
