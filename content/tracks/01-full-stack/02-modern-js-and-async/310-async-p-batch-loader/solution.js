function createLoader(batchFn) {
  let pending = null;
  return {
    load(id) {
      if (!pending) {
        pending = new Map();
        const batch = pending;
        queueMicrotask(async () => {
          pending = null;
          const ids = [...batch.keys()];
          try {
            const results = await batchFn(ids);
            ids.forEach((key, i) => batch.get(key).forEach((d) => d.resolve(results[i])));
          } catch (err) {
            for (const waiters of batch.values()) waiters.forEach((d) => d.reject(err));
          }
        });
      }
      return new Promise((resolve, reject) => {
        if (!pending.has(id)) pending.set(id, []);
        pending.get(id).push({ resolve, reject });
      });
    },
  };
}
