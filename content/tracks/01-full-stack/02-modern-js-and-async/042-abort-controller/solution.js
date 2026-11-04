function abortError() {
  const err = new Error('Aborted');
  err.name = 'AbortError';
  return err;
}

function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(abortError());
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(timer);
        reject(abortError());
      },
      { once: true },
    );
  });
}

function createSearcher(searchFn) {
  let controller = null;
  return async (query) => {
    controller?.abort();
    controller = new AbortController();
    try {
      return await searchFn(query, controller.signal);
    } catch (err) {
      if (err.name === 'AbortError') return null;
      throw err;
    }
  };
}
