export type Validator<T> = (value: T) => string | null;

export function combine<T>(...validators: Validator<T>[]): Validator<T> {
  return () => null;
}

export function assertNever(value: never): never {
  throw new Error();
}

export function retryable(fn: any, attempts: number) {
  return fn;
}
