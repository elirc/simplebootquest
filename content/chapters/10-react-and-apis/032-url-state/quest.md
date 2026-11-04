---
slug: "react-api-url-state"
title: "Filters in the URL"
type: "code"
language: "ts"
xp: 20
hints: ["`URLSearchParams.getAll(\"tags\")` returns every repeated value.", "Only `set` a param when its value differs from the default."]
resources: [{"title": "React Router: useSearchParams", "url": "https://reactrouter.com/api/hooks/useSearchParams"}]
---
# Filters in the URL

If filters live only in `useState`, a refresh loses them and links can't be shared. Store them in the **URL search params** instead:

```tsx
const [params, setParams] = useSearchParams();
const filters = parseFilters(params);                       // URL → typed state
setParams(serializeFilters({ ...filters, page: 2 }));       // typed state → URL
```

Good serialization omits **defaults**, so URLs stay short (`/products?q=shoe` rather than `/products?q=shoe&page=1&sort=relevance&inStock=false`), and parsing treats bad input gracefully.

## Your task

The filter state is `{ q: string; page: number; sort: 'relevance' | 'price-asc' | 'price-desc'; tags: string[]; inStock: boolean }`, with defaults `{ q: '', page: 1, sort: 'relevance', tags: [], inStock: false }`.

1. `parseFilters(search: string)` parses a query string like `"?q=shoe&tags=red&tags=sale&page=2"`. Invalid values fall back to the defaults.
2. `serializeFilters(filters)` returns a query string **without** the leading `?`, omitting default values. Tags become repeated keys, and the keys appear in the order q, page, sort, tags, inStock.
3. `setFilter(filters, key, value)` returns new filters with that key set, **resetting `page` to 1** whenever anything other than the page changes (a new filter means a new result set).
