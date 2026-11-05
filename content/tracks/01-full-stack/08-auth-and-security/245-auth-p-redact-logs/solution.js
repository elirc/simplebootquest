function redact(value, keys = ['password', 'token', 'authorization', 'cookie', 'secret']) {
  const lowered = keys.map((k) => k.toLowerCase());
  const seen = new WeakSet();
  const walk = (v) => {
    if (v === null || typeof v !== 'object' || v instanceof Date) return v;
    if (seen.has(v)) return '[Circular]';
    seen.add(v);
    let out;
    if (Array.isArray(v)) {
      out = v.map(walk);
    } else {
      out = {};
      for (const [k, child] of Object.entries(v)) {
        const lk = k.toLowerCase();
        out[k] = lowered.some((s) => lk.includes(s)) ? '[REDACTED]' : walk(child);
      }
    }
    seen.delete(v);
    return out;
  };
  return walk(value);
}
