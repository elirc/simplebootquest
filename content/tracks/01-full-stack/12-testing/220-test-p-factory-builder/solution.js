function isPlainObject(v) {
  return v !== null && typeof v === 'object' && !Array.isArray(v) && !(v instanceof Date);
}

function deepMerge(base, extra) {
  const out = { ...base };
  for (const [k, v] of Object.entries(extra)) {
    out[k] = isPlainObject(v) && isPlainObject(base[k]) ? deepMerge(base[k], v) : v;
  }
  return out;
}

function defineFactory(defaults) {
  let n = 0;
  const factory = {
    build(overrides = {}) {
      n++;
      return deepMerge(defaults(n), overrides);
    },
    buildList(count, overrides = {}) {
      return Array.from({ length: count }, (_, i) => factory.build(typeof overrides === 'function' ? overrides(i) : overrides));
    },
    reset() {
      n = 0;
    },
  };
  return factory;
}
