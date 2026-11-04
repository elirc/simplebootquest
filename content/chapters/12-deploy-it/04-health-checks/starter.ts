type Check = () => Promise<unknown>;

export function createHealthHandler(
  checks: Record<string, Check>,
  options: { timeoutMs: number; now: () => number },
) {
  return async (req: unknown, res: any) => {
    // TODO
  };
}
