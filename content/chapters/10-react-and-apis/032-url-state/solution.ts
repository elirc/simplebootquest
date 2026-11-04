type Sort = 'relevance' | 'price-asc' | 'price-desc';
interface Filters { q: string; page: number; sort: Sort; tags: string[]; inStock: boolean }
const DEFAULTS: Filters = { q: '', page: 1, sort: 'relevance', tags: [], inStock: false };
const SORTS: Sort[] = ['relevance', 'price-asc', 'price-desc'];

export function parseFilters(search: string): Filters {
  const p = new URLSearchParams(search);
  const page = Number(p.get('page'));
  const sort = p.get('sort') as Sort;
  return {
    q: p.get('q')?.trim() ?? DEFAULTS.q,
    page: Number.isInteger(page) && page >= 1 ? page : DEFAULTS.page,
    sort: SORTS.includes(sort) ? sort : DEFAULTS.sort,
    tags: p.getAll('tags').filter(Boolean),
    inStock: p.get('inStock') === 'true',
  };
}

export function serializeFilters(f: Filters): string {
  const p = new URLSearchParams();
  if (f.q) p.set('q', f.q);
  if (f.page !== DEFAULTS.page) p.set('page', String(f.page));
  if (f.sort !== DEFAULTS.sort) p.set('sort', f.sort);
  for (const tag of f.tags) p.append('tags', tag);
  if (f.inStock) p.set('inStock', 'true');
  return p.toString();
}

export function setFilter<K extends keyof Filters>(filters: Filters, key: K, value: Filters[K]): Filters {
  const next = { ...filters, [key]: value };
  if (key !== 'page') next.page = 1;
  return next;
}
