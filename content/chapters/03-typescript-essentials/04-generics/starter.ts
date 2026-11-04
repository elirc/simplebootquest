export function groupBy<T, K extends string | number>(items: T[], keyFn: (item: T) => K): Record<K, T[]> {
  // TODO
  return {} as Record<K, T[]>;
}

export function uniqueBy<T, K>(items: T[], keyFn: (item: T) => K): T[] {
  // TODO
  return [];
}

export function indexById<T extends { id: string | number }>(items: T[]): Map<T['id'], T> {
  // TODO
  return new Map();
}
