const DAY = 24 * 60 * 60 * 1000;
const RETENTION_DAYS = 30;

export function createSoftDeleteRepo(now: () => Date) {
  type Row = Record<string, unknown> & { id: number; deletedAt: Date | null };
  let rows: Row[] = [];
  let nextId = 1;

  const live = () => rows.filter((r) => r.deletedAt === null);
  const expired = (r: Row) => r.deletedAt !== null && now().getTime() - r.deletedAt.getTime() > RETENTION_DAYS * DAY;

  return {
    create(data: Record<string, unknown>) {
      const row: Row = { ...data, id: nextId++, deletedAt: null };
      rows.push(row);
      return { ...row };
    },
    findAll() {
      return live().map((r) => ({ ...r }));
    },
    findById(id: number) {
      const row = live().find((r) => r.id === id);
      return row ? { ...row } : undefined;
    },
    remove(id: number) {
      const row = rows.find((r) => r.id === id && r.deletedAt === null);
      if (!row) return false;
      row.deletedAt = now();
      return true;
    },
    restore(id: number) {
      const row = rows.find((r) => r.id === id && r.deletedAt !== null);
      if (!row || expired(row)) return false;
      row.deletedAt = null;
      return true;
    },
    trash() {
      return rows
        .filter((r) => r.deletedAt !== null)
        .sort((a, b) => b.deletedAt!.getTime() - a.deletedAt!.getTime())
        .map((r) => ({ ...r }));
    },
    purge() {
      const before = rows.length;
      rows = rows.filter((r) => !expired(r));
      return before - rows.length;
    },
  };
}
