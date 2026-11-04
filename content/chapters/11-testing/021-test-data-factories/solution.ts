export function createFactory<T extends Record<string, unknown>>(defaults: (n: number) => T) {
  let sequence = 0;
  const build = (overrides: Partial<T> = {}): T => {
    sequence++;
    const base = defaults(sequence);
    const out: Record<string, unknown> = { ...base };
    for (const [key, value] of Object.entries(overrides)) {
      const current = base[key];
      out[key] =
        value && typeof value === 'object' && !Array.isArray(value) && current && typeof current === 'object' && !Array.isArray(current)
          ? { ...current, ...value }
          : value;
    }
    return out as T;
  };
  return Object.assign(build, {
    reset() {
      sequence = 0;
    },
  });
}

export function buildList<T>(build: (o?: Partial<T>) => T, count: number, overrides?: Partial<T>): T[] {
  return Array.from({ length: count }, () => build(overrides));
}
