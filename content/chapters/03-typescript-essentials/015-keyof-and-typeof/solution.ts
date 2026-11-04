export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

export function sortBy<T>(items: T[], key: keyof T, dir: 'asc' | 'desc' = 'asc'): T[] {
  const sign = dir === 'asc' ? 1 : -1;
  return [...items].sort((a, b) => (a[key] < b[key] ? -sign : a[key] > b[key] ? sign : 0));
}

export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) out[key] = obj[key];
  return out;
}

export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const out = { ...obj };
  for (const key of keys) delete out[key];
  return out;
}
