---
slug: "node-p-content-type"
title: "Practice: Parsing Content-Type"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Split on `;`: the first piece is the type, the rest are `name=value` parameters."]
---
# Practice: Parsing Content-Type

`express.json()` only parses a body when the request says it is JSON. To decide that, it parses `Content-Type`:

```
Content-Type: application/json; charset=utf-8
Content-Type: multipart/form-data; boundary="----abc123"
```

The media type is case-insensitive, parameter names are case-insensitive, and parameter values may be quoted.

## Your task
1. `parseContentType(header)` returns `{ type, params }`: the type lowercased and trimmed, parameter names lowercased, quotes removed from values. Returns `null` for a missing header or one without a `/`.
2. `isJson(header)` is `true` for `application/json` and for any `+json` suffix type (e.g. `application/problem+json`).
