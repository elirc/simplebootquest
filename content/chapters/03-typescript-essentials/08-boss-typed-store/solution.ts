export class NotFoundError extends Error {
  constructor(id: number) {
    super(`Record ${id} not found`);
    this.name = 'NotFoundError';
  }
}

interface FindOptions<T> {
  where?: Partial<T>;
  orderBy?: { field: keyof T; direction: 'asc' | 'desc' };
  limit?: number;
}

export function createRepository<T extends { id: number }>() {
  const records = new Map<number, T>();
  let nextId = 1;

  const matches = (record: T, where: Partial<T> = {}) =>
    (Object.keys(where) as (keyof T)[]).every((key) => record[key] === where[key]);

  const require = (id: number): T => {
    const record = records.get(id);
    if (!record) throw new NotFoundError(id);
    return record;
  };

  return {
    create(data: Omit<T, 'id'>): T {
      const record = { ...data, id: nextId++ } as T;
      records.set(record.id, record);
      return { ...record };
    },
    findById(id: number): T | undefined {
      const record = records.get(id);
      return record ? { ...record } : undefined;
    },
    findMany(options: FindOptions<T> = {}): T[] {
      let result = [...records.values()].filter((r) => matches(r, options.where));
      if (options.orderBy) {
        const { field, direction } = options.orderBy;
        const sign = direction === 'asc' ? 1 : -1;
        result.sort((a, b) => (a[field] < b[field] ? -sign : a[field] > b[field] ? sign : 0));
      }
      if (options.limit !== undefined) result = result.slice(0, options.limit);
      return result.map((r) => ({ ...r }));
    },
    update(id: number, patch: Partial<Omit<T, 'id'>>): T {
      const updated = { ...require(id), ...patch, id } as T;
      records.set(id, updated);
      return { ...updated };
    },
    delete(id: number): void {
      require(id);
      records.delete(id);
    },
    count(where?: Partial<T>): number {
      return [...records.values()].filter((r) => matches(r, where)).length;
    },
  };
}
