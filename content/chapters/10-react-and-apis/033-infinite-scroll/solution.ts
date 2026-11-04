type Item = { id: string | number };
type Page = { cursor: string | null; items: Item[]; nextCursor: string | null };
type State = { pages: Page[] };

export function addPage(state: State, page: Page): State {
  const index = state.pages.findIndex((p) => p.cursor === page.cursor);
  if (index === -1) return { pages: [...state.pages, page] };
  return { pages: state.pages.map((p, i) => (i === index ? page : p)) };
}

export function flatItems(state: State): Item[] {
  const seen = new Set<Item['id']>();
  const out: Item[] = [];
  for (const page of state.pages) {
    for (const item of page.items) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);
      out.push(item);
    }
  }
  return out;
}

export function hasMore(state: State): boolean {
  const last = state.pages[state.pages.length - 1];
  return !last || last.nextCursor !== null;
}

export function nextCursor(state: State): string | null {
  return state.pages[state.pages.length - 1]?.nextCursor ?? null;
}
