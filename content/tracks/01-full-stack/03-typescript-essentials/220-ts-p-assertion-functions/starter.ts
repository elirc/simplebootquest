export function assertDefined(value: unknown, message: string) {}
export function assert(condition: unknown, message: string) {}
export function getRequiredEnv(env: Record<string, string | undefined>, name: string): string {
  return env[name] as string;
}
