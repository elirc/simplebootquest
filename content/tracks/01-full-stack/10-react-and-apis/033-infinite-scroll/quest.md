---
slug: "react-api-infinite-list"
title: "Infinite Lists: Merging Pages"
type: "code"
language: "ts"
xp: 20
hints: ["Find an existing page with the same cursor before appending.", "A `Set` of seen ids removes duplicates while flattening."]
resources: [{"title": "TanStack Query: Infinite queries", "url": "https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries"}]
---
# Infinite Lists: Merging Pages

An infinite-scroll feed loads page after page and appends them. Real-world complications:

- **Duplicates**: new items get inserted at the top while you scroll, so later pages repeat items you've already seen. Deduplicate by id.
- **Refetching** a page replaces that page's items, without appending them again.
- Knowing **when to stop**: `hasMore` comes from the API's `nextCursor`.

TanStack Query's `useInfiniteQuery` stores `pages: Page[]` and you flatten them for rendering. That's exactly what you'll build.

## Your task

State shape: `{ pages: { cursor: string | null; items: { id }[]; nextCursor: string | null }[] }`.

1. `addPage(state, page)` appends the page, or **replaces** an existing page that has the same `cursor`.
2. `flatItems(state)` returns all items across pages in order, **without duplicate ids** (the first occurrence wins).
3. `hasMore(state)` is true if the last page has a `nextCursor` (or if there are no pages yet).
4. `nextCursor(state)` returns the cursor to fetch next (`null` for the first page).
