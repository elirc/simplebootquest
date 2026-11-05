---
slug: "node-p-etag-fresh"
title: "Practice: Conditional GET with ETags"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Strip a leading `W/` from both sides before comparing.", "`Date.parse` understands HTTP dates like `Mon, 01 Jan 2024 00:00:00 GMT`."]
resources: [{"title": "MDN: ETag", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"}]
---
# Practice: Conditional GET with ETags

If a client already has the latest version of a resource, the server can skip the body and answer **304 Not Modified**. The client sends the tag it has:

```
If-None-Match: "v2", W/"v3"
```

and the server compares it with the resource's current `ETag`. `If-None-Match` uses **weak comparison**: `W/"v3"` matches `"v3"`. The value `*` matches any existing resource.

## Your task
Write `isFresh(requestHeaders, responseHeaders)` (header names are lowercase):
- Returns `true` if `if-none-match` contains the response `etag` (weak comparison), or is `*`.
- If there's no `if-none-match`, fall back to `if-modified-since`: fresh when the response `last-modified` is **not later** than that date.
- If `if-none-match` is present, ignore `if-modified-since` entirely (that's the spec).
- Otherwise `false`.
