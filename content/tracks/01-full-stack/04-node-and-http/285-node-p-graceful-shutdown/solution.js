function createTracker() {
  const pending = new Set();
  let draining = false;
  return {
    track(promise) {
      if (draining) throw new Error('Shutting down');
      const settled = promise.then(
        () => {},
        () => {},
      );
      pending.add(settled);
      settled.then(() => pending.delete(settled));
      return promise;
    },
    active: () => pending.size,
    async drain() {
      draining = true;
      while (pending.size > 0) await Promise.all([...pending]);
    },
  };
}
