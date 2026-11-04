export function encodeCursor(id: number): string { return ''; }
export function decodeCursor(cursor: string): { id: number } | null { return null; }
export function paginate<T extends { id: number }>(items: T[], opts: { limit: number; cursor?: string }) {
  return { data: items, nextCursor: null as string | null };
}
