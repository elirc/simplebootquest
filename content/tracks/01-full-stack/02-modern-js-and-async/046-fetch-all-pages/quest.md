---
slug: "js-fetch-all-pages"
title: "Fetching Every Page"
type: "code"
language: "js"
xp: 20
hints: ["A `do...while` loop fits \"fetch, then check whether there is more\".", "`yield*` yields every element of an array.", "Returning from inside `for await` stops the generator, so no more pages are fetched."]
resources: [{"title": "MDN: for await...of", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of"}]
---
# Fetching Every Page

Paginated APIs return one page at a time, plus a way to get the next:

```json
{ "data": [ ... ], "nextCursor": "abc123" }   // nextCursor is null on the last page
```

To collect everything, keep requesting until there's no next cursor. An **async generator** (`async function*`) can also yield page by page, so the caller can stop early:

```js
for await (const item of iterateAll(fetchPage)) {
  if (found(item)) break;   // later pages are never fetched
}
```

## Your task

1. `fetchAll(fetchPage)` calls `fetchPage(cursor)` (starting with `null`) until `nextCursor` is `null`, and resolves to all items in order.
2. `async function* iterateAll(fetchPage)` yields items one at a time, fetching pages lazily.
3. `findFirst(fetchPage, predicate)` uses `iterateAll` and stops fetching as soon as it finds a match (resolves to `undefined` if nothing matches).
