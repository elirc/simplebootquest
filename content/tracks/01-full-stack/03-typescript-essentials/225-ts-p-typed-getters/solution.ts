type Getters<T> = { [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K] };

export function makeGetters<T extends Record<string, unknown>>(obj: T): Getters<T> {
  const out: Record<string, () => unknown> = {};
  for (const key of Object.keys(obj)) {
    out[`get${key[0]!.toUpperCase()}${key.slice(1)}`] = () => obj[key];
  }
  return out as Getters<T>;
}
