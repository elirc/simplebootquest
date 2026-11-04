---
slug: "crud-cursor-pagination"
title: "Cursor Pagination"
type: "code"
language: "ts"
xp: 25
hints: ["Find the first item whose id is **less than** the cursor id (because items are sorted descending).", "There are more items if `start + limit < sorted.length`."]
resources: [{"title": "Prisma: Cursor-based pagination", "url": "https://www.prisma.io/docs/orm/prisma-client/queries/pagination#cursor-based-pagination"}, {"title": "Slack engineering: Evolving API pagination", "url": "https://slack.engineering/evolving-api-pagination-at-slack/"}]
---
# Cursor Pagination

Offset pagination (`OFFSET 10000`) gets slower as the offset grows, because the database still walks past every skipped row. It also shows duplicates or skips items when rows are inserted while someone is paging. **Cursor pagination** fixes both: "give me 20 items *after* this one".

```ts
prisma.post.findMany({
  take: 21,                          // one extra, to know if there's a next page
  ...(cursor && { cursor: { id: cursor }, skip: 1 }),
  orderBy: { id: 'desc' },
});
```

The cursor is often an **opaque** base64 string, so clients don't depend on its format:

```json
{ "data": [...], "nextCursor": "eyJpZCI6MTAwfQ" }
```

## Your task

Items are sorted by `id` **descending** (newest first).

1. `encodeCursor(id)` / `decodeCursor(cursor)`: base64 of `JSON.stringify({ id })`. Decoding an invalid cursor returns `null`.
2. `paginate(items, { limit, cursor })` returns `{ data, nextCursor }`. It sorts by id descending, starts **after** the cursor's id if one is given, takes `limit` items, and returns `nextCursor` (the encoded id of the last item) only if more items remain, otherwise `null`. An invalid cursor throws an `Error('Invalid cursor')`.
