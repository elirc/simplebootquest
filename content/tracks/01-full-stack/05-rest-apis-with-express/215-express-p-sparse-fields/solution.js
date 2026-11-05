function selectFields(records, fieldsParam, allowed) {
  const requested = fieldsParam ? fieldsParam.split(',').map((f) => f.trim()).filter(Boolean) : allowed;
  const wanted = new Set(requested.length ? requested : allowed);
  wanted.add('id');
  const keys = allowed.filter((f) => wanted.has(f));
  return records.map((r) => {
    const out = {};
    for (const k of keys) if (k in r) out[k] = r[k];
    return out;
  });
}
