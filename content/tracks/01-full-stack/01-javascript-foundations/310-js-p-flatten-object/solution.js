function flattenObject(obj, prefix = '', out = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) flattenObject(value, path, out);
    else out[path] = value;
  }
  return out;
}

function unflattenObject(flat) {
  const out = {};
  for (const [path, value] of Object.entries(flat)) {
    const keys = path.split('.');
    let node = out;
    keys.slice(0, -1).forEach((k) => (node = node[k] ??= {}));
    node[keys[keys.length - 1]] = value;
  }
  return out;
}
