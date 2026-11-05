function createLoader(batchFn) {
  let queue = null;
  const flush = async (batch) => {
    const ids = [...batch.keys()];
    try {
      const rows = await batchFn(ids);
      const byId = new Map(rows.map((r) => [r.id, r]));
      for (const [id, waiters] of batch) for (const w of waiters) w.resolve(byId.get(id) ?? null);
    } catch (err) {
      for (const waiters of batch.values()) for (const w of waiters) w.reject(err);
    }
  };
  return {
    load(id) {
      return new Promise((resolve, reject) => {
        if (!queue) {
          queue = new Map();
          const batch = queue;
          queueMicrotask(() => {
            queue = null;
            flush(batch);
          });
        }
        if (!queue.has(id)) queue.set(id, []);
        queue.get(id).push({ resolve, reject });
      });
    },
  };
}
