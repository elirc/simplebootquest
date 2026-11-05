function createLoader(batchFn) {
  return { load: (id) => batchFn([id]).then((r) => r[0]) };
}
