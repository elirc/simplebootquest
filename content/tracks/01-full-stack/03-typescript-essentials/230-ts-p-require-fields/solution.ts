export function requireFields<T extends object, K extends keyof T>(obj: T, keys: K[]): T & Required<Pick<T, K>> {
  const missing = keys.filter((k) => obj[k] === undefined || obj[k] === null || (obj[k] as unknown) === '');
  if (missing.length) throw new Error(`Missing required fields: ${missing.map(String).join(', ')}`);
  return obj as T & Required<Pick<T, K>>;
}
