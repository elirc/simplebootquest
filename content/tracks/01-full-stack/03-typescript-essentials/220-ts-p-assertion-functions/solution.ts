export function assertDefined<T>(value: T, message: string): asserts value is NonNullable<T> {
  if (value === null || value === undefined) throw new Error(message);
}

export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

export function getRequiredEnv(env: Record<string, string | undefined>, name: string): string {
  const value = env[name] === '' ? undefined : env[name];
  assertDefined(value, `Missing environment variable: ${name}`);
  return value;
}
