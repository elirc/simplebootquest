export function countBy<T, K extends string>(items: T[], keyFn: (item: T) => K): Partial<Record<K, number>> {
  const out: Partial<Record<K, number>> = {};
  for (const item of items) {
    const k = keyFn(item);
    out[k] = (out[k] ?? 0) + 1;
  }
  return out;
}

export function groupByKey<T, K extends keyof T>(items: T[], key: K): Map<T[K], T[]> {
  const out = new Map<T[K], T[]>();
  for (const item of items) {
    const k = item[key];
    if (!out.has(k)) out.set(k, []);
    out.get(k)!.push(item);
  }
  return out;
}

export function topKey(counts: Record<string, number | undefined>): string | undefined {
  let best: string | undefined;
  for (const [k, v] of Object.entries(counts)) if (v !== undefined && (best === undefined || v > counts[best]!)) best = k;
  return best;
}
