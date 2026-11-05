---
slug: "express-p-sort-param"
title: "Practice: Safe Sorting"
type: "code"
language: "js"
xp: 15
hints: ["Check `allowed.includes(field)` AFTER stripping the leading `-`."]
---
# Practice: Safe Sorting

A common convention: `?sort=-createdAt,title` means "newest first, then by title". The leading `-` means descending.

**Never** pass a client's sort field straight into SQL (`ORDER BY ${field}`) or Prisma. Check it against an **allow-list**. Otherwise clients can sort by `passwordHash` (leaking information through the ordering) or inject SQL.

## Your task
Write `parseSort(param, allowed, fallback)`:
- Returns an array like `[{ field: 'createdAt', direction: 'desc' }, { field: 'title', direction: 'asc' }]`.
- Missing or empty `param` → `fallback`.
- Trim each entry and ignore empty ones (`"title,"`).
- A field not in `allowed` → throw `Error('Cannot sort by "<field>"')`.
- Listing the same field twice → keep only the first.
