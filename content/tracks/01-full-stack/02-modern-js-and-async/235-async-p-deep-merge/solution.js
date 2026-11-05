const isPlain = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

function deepMerge(base, override) {
  const out = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (value === undefined) continue;
    out[key] = isPlain(value) && isPlain(base[key]) ? deepMerge(base[key], value) : value;
  }
  return out;
}
