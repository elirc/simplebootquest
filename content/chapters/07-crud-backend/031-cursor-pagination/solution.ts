export function encodeCursor(id: number): string {
  return btoa(JSON.stringify({ id }));
}

export function decodeCursor(cursor: string): { id: number } | null {
  try {
    const value = JSON.parse(atob(cursor));
    return typeof value?.id === 'number' ? { id: value.id } : null;
  } catch {
    return null;
  }
}

export function paginate<T extends { id: number }>(items: T[], { limit, cursor }: { limit: number; cursor?: string }) {
  const sorted = [...items].sort((a, b) => b.id - a.id);
  let start = 0;
  if (cursor) {
    const decoded = decodeCursor(cursor);
    if (!decoded) throw new Error('Invalid cursor');
    start = sorted.findIndex((item) => item.id < decoded.id);
    if (start === -1) start = sorted.length;
  }
  const data = sorted.slice(start, start + limit);
  const hasMore = start + limit < sorted.length;
  return { data, nextCursor: hasMore && data.length ? encodeCursor(data[data.length - 1]!.id) : null };
}
