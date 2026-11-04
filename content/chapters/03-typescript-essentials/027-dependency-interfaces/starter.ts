interface Logger { info(msg: string): void; error(msg: string): void }
interface Clock { now(): Date }

export class MemoryLogger {}
export class FixedClock {}

export function createJobRunner(deps: { logger: Logger; clock: Clock }) {
  return { run: async (name: string, job: () => Promise<unknown>) => ({}) };
}
