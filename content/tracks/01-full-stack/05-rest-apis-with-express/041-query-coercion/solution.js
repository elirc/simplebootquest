function parseOne(raw, rule) {
  switch (rule.type) {
    case 'int':
    case 'number': {
      const ok = rule.type === 'int' ? /^-?\d+$/.test(raw) : raw.trim() !== '' && !Number.isNaN(Number(raw));
      if (!ok) return undefined;
      let n = Number(raw);
      if (rule.min !== undefined) n = Math.max(rule.min, n);
      if (rule.max !== undefined) n = Math.min(rule.max, n);
      return n;
    }
    case 'boolean':
      if (raw === 'true' || raw === '1') return true;
      if (raw === 'false' || raw === '0') return false;
      return undefined;
    case 'enum':
      return rule.values.includes(raw) ? raw : undefined;
    default:
      return undefined;
  }
}

function parseQuery(query, spec) {
  const out = {};
  for (const [name, rule] of Object.entries(spec)) {
    const raw = query[name];
    let value;
    if (rule.type === 'list') {
      if (raw !== undefined) {
        const values = (Array.isArray(raw) ? raw : [raw]).flatMap((v) => v.split(',')).map((v) => v.trim()).filter(Boolean);
        value = values.length ? values : undefined;
      }
    } else if (raw !== undefined) {
      value = parseOne(Array.isArray(raw) ? raw[0] : raw, rule);
    }
    if (value === undefined) value = rule.default;
    if (value !== undefined) out[name] = value;
  }
  return out;
}
