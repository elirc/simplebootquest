function makeCancellable(promise) {
  let cancelled = false;
  let rejectFn;
  const wrapped = new Promise((resolve, reject) => {
    rejectFn = reject;
    promise.then(
      (v) => (cancelled ? undefined : resolve(v)),
      (e) => (cancelled ? undefined : reject(e)),
    );
  });
  return {
    promise: wrapped,
    cancel() {
      cancelled = true;
      const err = new Error('Cancelled');
      err.name = 'CancelError';
      rejectFn(err);
    },
  };
}

function latestOnly(asyncFn) {
  let latest = 0;
  return async (...args) => {
    const id = ++latest;
    const result = await asyncFn(...args);
    return id === latest ? result : undefined;
  };
}
