---
slug: "express-query-coercion"
title: "Validating Query Strings"
type: "code"
language: "js"
xp: 20
hints: ["Write a `parseOne(raw, rule)` helper that returns `undefined` for invalid input.", "Lists need special handling: normalize to an array, then split on commas."]
---
# Validating Query Strings

Query parameters are **always strings** (or arrays of strings). A list endpoint needs to coerce and validate them:

```
GET /api/products?page=2&minPrice=10.5&inStock=true&tags=a&tags=b
req.query → { page: '2', minPrice: '10.5', inStock: 'true', tags: ['a', 'b'] }
```

Zod has `z.coerce.number()` for exactly this. Unlike bodies, invalid query values often fall back to a default, which is friendlier for links people share. Use errors for things that really matter.

## Your task

Implement `parseQuery(query, spec)`, where `spec` maps names to `{ type, default?, min?, max?, values? }`:

| type | Accepts | Result |
|------|---------|--------|
| `'int'` | an integer string | a number (clamped to min/max) |
| `'number'` | any numeric string | a number (clamped) |
| `'boolean'` | `'true'`, `'false'`, `'1'`, `'0'` | a boolean |
| `'enum'` | one of `values` | a string |
| `'list'` | a string or an array of strings | an array (a comma-separated string is split; empties dropped) |

Missing or invalid values use `default` (and are left out entirely if there's no default). For a repeated key that isn't a `list`, use the **first** value. Unknown query keys are ignored.
