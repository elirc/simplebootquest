export class ConflictError extends Error {
  constructor(public current: unknown) {
    super('Version conflict');
  }
}
export class NotFoundError extends Error {}

export function createDocStore() {
  return {
    create(content: string) { return { id: 1, content, version: 1 }; },
    get(id: number) { return undefined; },
    update(id: number, content: string, expectedVersion: number) { return { id, content, version: expectedVersion }; },
  };
}
