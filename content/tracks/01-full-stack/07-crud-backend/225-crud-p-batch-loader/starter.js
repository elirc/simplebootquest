function createLoader(batchFn) {
  return {
    async load(id) {
      const [row] = await batchFn([id]);
      return row ?? null;
    },
  };
}
