interface Logger { info(msg: string): void; error(msg: string): void }
interface Clock { now(): Date }

export class MemoryLogger implements Logger {
  entries: { level: 'info' | 'error'; msg: string }[] = [];
  info(msg: string) {
    this.entries.push({ level: 'info', msg });
  }
  error(msg: string) {
    this.entries.push({ level: 'error', msg });
  }
}

export class FixedClock implements Clock {
  constructor(private readonly date: Date) {}
  now() {
    return this.date;
  }
}

export function createJobRunner({ logger, clock }: { logger: Logger; clock: Clock }) {
  return {
    async run<T>(name: string, job: () => Promise<T>) {
      logger.info(`${name} started at ${clock.now().toISOString()}`);
      try {
        const value = await job();
        logger.info(`${name} finished`);
        return { ok: true as const, value };
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        logger.error(`${name} failed: ${message}`);
        return { ok: false as const, error: message };
      }
    },
  };
}
