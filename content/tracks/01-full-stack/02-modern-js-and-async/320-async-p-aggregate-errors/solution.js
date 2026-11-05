async function runAll(tasks) {
  const results = await Promise.allSettled(tasks.map((t) => t()));
  const errors = results.filter((r) => r.status === 'rejected').map((r) => r.reason);
  if (errors.length) throw new AggregateError(errors, `${errors.length} of ${tasks.length} tasks failed`);
  return results.map((r) => r.value);
}
