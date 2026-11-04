---
slug: "js-array-utilities"
title: "Array Utilities: chunk, unique, range"
type: "code"
language: "js"
xp: 20
hints: ["`chunk`: loop with `i += size` and slice `i` to `i + size`.", "A `Set` keeps insertion order, so spreading it back into an array preserves order."]
resources: [{"title": "Lodash docs (for inspiration)", "url": "https://lodash.com/docs/"}]
---
# Array Utilities

Libraries like Lodash provide dozens of array helpers. Writing a few yourself is great practice, and you'll understand exactly what they do.

- **unique**: remove duplicates. `[...new Set(array)]` is the one-liner for primitives.
- **chunk**: split into groups of a given size, for batching API calls or laying out grid rows.
- **range**: generate `[start, ..., end)`, handy for pagination buttons.
- **zip**: pair up elements from two arrays.

## Your task

1. `unique(array)` removes duplicates, keeping the first occurrence order.
2. `chunk(array, size)` → `chunk([1, 2, 3, 4, 5], 2)` = `[[1, 2], [3, 4], [5]]`.
3. `range(start, end, step = 1)` returns the numbers from `start` up to but **not including** `end`. `step` may be greater than 1.
4. `zip(a, b)` returns pairs `[a[i], b[i]]`, stopping at the shorter array.
5. `partition(array, predicate)` returns `[passing, failing]`.
