export class NotFoundError extends Error {
  // TODO
}

interface FindOptions<T> {
  where?: Partial<T>;
  orderBy?: { field: keyof T; direction: 'asc' | 'desc' };
  limit?: number;
}

export function createRepository<T extends { id: number }>() {
  const records = new Map<number, T>();
  let nextId = 1;

  return {
    create(data: Omit<T, 'id'>): T {
      throw new Error('Not implemented');
    },
    findById(id: number): T | undefined {
      return undefined;
    },
    findMany(options: FindOptions<T> = {}): T[] {
      return [];
    },
    update(id: number, patch: Partial<Omit<T, 'id'>>): T {
      throw new Error('Not implemented');
    },
    delete(id: number): void {},
    count(where?: Partial<T>): number {
      return 0;
    },
  };
}
