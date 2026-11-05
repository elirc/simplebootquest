---
slug: "ut-p-paginate-tests"
title: "Practice: Testing Pagination"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
---
# Practice: Testing Pagination

`paginate(items, page, pageSize)` returns `{ items, page, totalPages, hasPrev, hasNext }`:

- Pages start at **1**.
- `totalPages` is at least 1, even for an empty list.
- A `page` below 1 is treated as 1. A `page` above `totalPages` is treated as `totalPages`.
- `pageSize` must be a positive integer, else throw `RangeError`.

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
