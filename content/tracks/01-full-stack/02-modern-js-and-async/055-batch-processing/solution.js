async function processInBatches(items, size, handler, onProgress = () => {}) {
  const results = [];
  for (let i = 0, batchIndex = 0; i < items.length; i += size, batchIndex++) {
    const batch = items.slice(i, i + size);
    results.push(await handler(batch, batchIndex));
    onProgress(Math.min(i + size, items.length), items.length);
  }
  return results;
}
