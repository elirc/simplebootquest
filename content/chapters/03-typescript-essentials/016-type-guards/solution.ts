export function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export function hasMessage(err: unknown): err is { message: string } {
  return isRecord(err) && typeof err.message === 'string';
}

export function errorMessage(err: unknown): string {
  if (err instanceof Error || hasMessage(err)) return err.message;
  if (typeof err === 'string') return err;
  return 'Unknown error';
}

export function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === 'string');
}

export function filterDefined<T>(items: (T | null | undefined)[]): T[] {
  return items.filter((x): x is T => x !== null && x !== undefined);
}
