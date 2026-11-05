function deepClone(value) {
  if (value === null || typeof value !== 'object') return value;
  if (value instanceof Date) return new Date(value.getTime());
  if (value instanceof Map) return new Map([...value].map(([k, v]) => [deepClone(k), deepClone(v)]));
  if (value instanceof Set) return new Set([...value].map(deepClone));
  if (Array.isArray(value)) return value.map(deepClone);
  return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, deepClone(v)]));
}
