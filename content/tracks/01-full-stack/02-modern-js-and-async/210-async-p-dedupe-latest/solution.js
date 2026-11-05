function latestBy(records, key, dateField) {
  const latest = new Map();
  for (const r of records) {
    const current = latest.get(r[key]);
    if (!current || r[dateField] > current[dateField]) latest.set(r[key], r);
  }
  return [...latest.values()].sort((a, b) => (a[dateField] < b[dateField] ? 1 : -1));
}
