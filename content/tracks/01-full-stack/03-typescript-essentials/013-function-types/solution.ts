export type Validator<T> = (value: T) => string | null;

export function combine<T>(...validators: Validator<T>[]): Validator<T> {
  return (value) => {
    for (const v of validators) {
      const error = v(value);
      if (error) return error;
    }
    return null;
  };
}

export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}

export function retryable<A extends unknown[], R>(fn: (...args: A) => R, attempts: number): (...args: A) => R {
  return (...args: A) => {
    let lastError: unknown;
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError;
  };
}
