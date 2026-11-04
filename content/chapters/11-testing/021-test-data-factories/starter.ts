export function createFactory<T>(defaults: (n: number) => T) {
  const build = (overrides: Partial<T> = {}) => ({ ...defaults(1), ...overrides });
  return Object.assign(build, { reset() {} });
}

export function buildList<T>(build: (o?: Partial<T>) => T, count: number, overrides?: Partial<T>): T[] {
  return [];
}
