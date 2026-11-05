---
slug: "node-p-parse-query"
title: "Practice: Parsing Query Strings"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Split on `&` first, then split each part on the FIRST `=` only.", "Replace `+` with a space before calling `decodeURIComponent`, because `decodeURIComponent` leaves `+` alone."]
resources: [{"title": "MDN: URLSearchParams", "url": "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"}]
---
# Practice: Parsing Query Strings

Every Express handler reads `req.query`. Under the hood, a query string like `?tag=a&tag=b&q=hello+world` has to be split, decoded and grouped.

Rules worth knowing:
- `+` means a space in query strings (an HTML form legacy), and `%20` does too.
- A key can appear more than once, which is how you send arrays.
- A key with no `=` (like `?debug`) has an empty-string value.

## Your task
Write `parseQuery(qs)`:
- Accepts the string with or without a leading `?`. An empty string gives `{}`.
- Decodes keys and values (`+` → space, then `decodeURIComponent`).
- A repeated key becomes an array of values, in order.
