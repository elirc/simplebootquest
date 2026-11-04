---
slug: "node-headers"
title: "Case-Insensitive Headers"
type: "code"
language: "js"
xp: 15
hints: ["Normalize every name with `toLowerCase()` before storing or reading.", "Store an array of values per header."]
resources: [{"title": "MDN: HTTP headers", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"}]
---
# Case-Insensitive Headers

HTTP header names are case-insensitive: `Content-Type`, `content-type` and `CONTENT-TYPE` are the same header. The `Headers` class used by `fetch` handles this for you, and Node lowercases incoming header names in `req.headers`.

Some headers can appear **more than once** (like `Set-Cookie` and `Vary`). `append` adds a value, while `set` replaces all of them. When reading, multiple values are joined with `", "`.

## Your task

Implement `class HttpHeaders`:

- `set(name, value)`: replaces any existing values.
- `append(name, value)`: adds a value.
- `get(name)`: values joined with `", "`, or `null`.
- `has(name)`, `delete(name)`.
- `entries()`: an array of `[lowercaseName, joinedValue]`, sorted by name.
- The constructor optionally takes a plain object of initial headers.
