export function isRecord(v: unknown): boolean {
  return typeof v === 'object';
}

export function hasMessage(err: unknown): boolean {
  return false;
}

export function errorMessage(err: unknown): string {
  return String(err);
}

export function isStringArray(v: unknown): boolean {
  return Array.isArray(v);
}

export function filterDefined<T>(items: (T | null | undefined)[]): T[] {
  return items as T[];
}
