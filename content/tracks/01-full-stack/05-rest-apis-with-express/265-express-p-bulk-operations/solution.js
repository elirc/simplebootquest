async function runBulk(items, handler, { maxItems = 100 } = {}) {
  if (items.length > maxItems) throw new Error(`Too many items (max ${maxItems})`);
  const results = [];
  for (let index = 0; index < items.length; index++) {
    try {
      results.push({ index, ok: true, data: await handler(items[index], index) });
    } catch (err) {
      results.push({ index, ok: false, error: err instanceof Error ? err.message : String(err) });
    }
  }
  const succeeded = results.filter((r) => r.ok).length;
  const failed = results.length - succeeded;
  const status = failed === 0 ? 200 : succeeded === 0 ? 422 : 207;
  return { status, results, succeeded, failed };
}
