---
slug: "node-content-negotiation"
title: "Content Negotiation"
type: "code"
language: "js"
xp: 20
hints: ["Split on `,`, then split each part on `;` to find the `q=` parameter.", "When matching a range against `available`, the first matching range in sorted order decides the q value."]
resources: [{"title": "MDN: Content negotiation", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation"}]
---
# Content Negotiation

Clients say what they can handle with the `Accept` header, ranked by **quality values**:

```http
Accept: text/html, application/json;q=0.9, */*;q=0.1
```

`q` ranges from 0 to 1 (default 1). `q=0` means "not acceptable". Wildcards: `*/*` matches anything, and `text/*` matches any `text` type. The server picks the best type it can produce. If nothing matches, it responds `406 Not Acceptable`.

Express has `req.accepts(['json', 'html'])` built on exactly this logic.

## Your task

1. `parseAccept(header)` returns `[{ type, q }]` sorted by `q` descending. Ties keep header order, but more specific types win (an exact type beats `type/*`, which beats `*/*`). A missing or empty header means `[{ type: '*/*', q: 1 }]`.
2. `negotiate(header, available)` returns the best type from `available` (in server preference order when q values tie), or `null`.
