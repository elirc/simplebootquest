function serialize(value, indent = '') {
  if (value === undefined) return 'undefined';
  if (value === null || typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'function') return `[Function ${value.name || 'anonymous'}]`;
  if (value instanceof Date) return `Date(${value.toISOString()})`;
  const inner = indent + '  ';
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    return `[\n${value.map((v) => `${inner}${serialize(v, inner)},`).join('\n')}\n${indent}]`;
  }
  const keys = Object.keys(value).sort();
  if (keys.length === 0) return '{}';
  const key = (k) => (/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k));
  return `{\n${keys.map((k) => `${inner}${key(k)}: ${serialize(value[k], inner)},`).join('\n')}\n${indent}}`;
}
