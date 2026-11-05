function createLatest() {
  let current = 0;
  let controller = null;
  return async (asyncFn) => {
    const id = ++current;
    controller?.abort();
    controller = new AbortController();
    try {
      const value = await asyncFn(controller.signal);
      return id === current ? { stale: false, value } : { stale: true };
    } catch (err) {
      if (id !== current) return { stale: true };
      throw err;
    }
  };
}
