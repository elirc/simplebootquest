function createLatest() {
  return async (asyncFn) => ({ stale: false, value: await asyncFn(undefined) });
}
