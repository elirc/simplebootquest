export class ConflictError extends Error {
  constructor(public current: unknown) {
    super('Version conflict');
  }
}
export class NotFoundError extends Error {}

interface Doc { id: number; content: string; version: number }

export function createDocStore() {
  const docs = new Map<number, Doc>();
  let nextId = 1;
  return {
    create(content: string): Doc {
      const doc = { id: nextId++, content, version: 1 };
      docs.set(doc.id, doc);
      return { ...doc };
    },
    get(id: number): Doc | undefined {
      const doc = docs.get(id);
      return doc ? { ...doc } : undefined;
    },
    update(id: number, content: string, expectedVersion: number): Doc {
      const doc = docs.get(id);
      if (!doc) throw new NotFoundError(`Doc ${id} not found`);
      if (doc.version !== expectedVersion) throw new ConflictError({ ...doc });
      const updated = { ...doc, content, version: doc.version + 1 };
      docs.set(id, updated);
      return { ...updated };
    },
  };
}
