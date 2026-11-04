export function createSoftDeleteRepo(now: () => Date) {
  return {
    create(data: Record<string, unknown>) { return data; },
    findAll() { return []; },
    findById(id: number) { return undefined; },
    remove(id: number) { return false; },
    restore(id: number) { return false; },
    trash() { return []; },
    purge() { return 0; },
  };
}
