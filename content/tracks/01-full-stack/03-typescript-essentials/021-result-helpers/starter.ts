export type Result<T, E = string> = { ok: true; value: T } | { ok: false; error: E };

export function ok(value: any): any {}
export function err(error: any): any {}
export function map(result: any, fn: any): any {}
export function andThen(result: any, fn: any): any {}
export function unwrapOr(result: any, fallback: any): any {}
export function parsePort(input: string): Result<number> {
  return { ok: false, error: 'todo' };
}
