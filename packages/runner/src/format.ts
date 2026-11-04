/** Turn any value into a short, readable string for test failure messages. */
export function format(value: unknown, depth = 0, seen = new WeakSet<object>()): string {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'string') return depth === 0 ? JSON.stringify(value) : JSON.stringify(value);
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') return String(value);
  if (typeof value === 'symbol') return value.toString();
  if (typeof value === 'function') return `[Function ${value.name || 'anonymous'}]`;
  if (value instanceof Error) return `${value.name}: ${value.message}`;
  if (value instanceof Date) return `Date(${isNaN(value.getTime()) ? 'Invalid' : value.toISOString()})`;
  if (value instanceof RegExp) return value.toString();
  if (typeof value !== 'object') return String(value);

  if (seen.has(value)) return '[Circular]';
  if (depth > 4) return Array.isArray(value) ? '[Array]' : '[Object]';
  seen.add(value);
  try {
    if (Array.isArray(value)) {
      const items = value.slice(0, 20).map((v) => format(v, depth + 1, seen));
      if (value.length > 20) items.push(`…${value.length - 20} more`);
      return `[${items.join(', ')}]`;
    }
    if (value instanceof Map) {
      const items = [...value.entries()].map(([k, v]) => `${format(k, depth + 1, seen)} => ${format(v, depth + 1, seen)}`);
      return `Map(${value.size}) {${items.join(', ')}}`;
    }
    if (value instanceof Set) {
      return `Set(${value.size}) {${[...value].map((v) => format(v, depth + 1, seen)).join(', ')}}`;
    }
    if (value instanceof Promise) return 'Promise {…}';
    const entries = Object.entries(value as Record<string, unknown>);
    const items = entries.slice(0, 20).map(([k, v]) => `${/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${format(v, depth + 1, seen)}`);
    if (entries.length > 20) items.push(`…${entries.length - 20} more`);
    return items.length ? `{ ${items.join(', ')} }` : '{}';
  } finally {
    seen.delete(value);
  }
}
