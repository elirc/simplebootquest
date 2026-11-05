async function runBulk(items, handler, { maxItems = 100 } = {}) {
  const results = await Promise.all(items.map(handler));
  return { status: 200, results, succeeded: items.length, failed: 0 };
}
