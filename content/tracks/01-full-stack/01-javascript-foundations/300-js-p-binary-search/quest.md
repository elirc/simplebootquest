---
slug: "js-p-binary-search"
title: "Practice: Binary Search"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Loop while `lo <= hi`; move `lo` to `mid + 1` or `hi` to `mid - 1`."]
---
# Practice: Binary Search

Searching a sorted array of a million items with a loop takes up to a million steps. **Binary search** takes about 20: look at the middle, discard the half that can't contain the target, and repeat. Database indexes (B-trees) work on the same idea.

## Your task
`binarySearch(sorted, target)` returns the index of `target` in an ascending array, or `-1`. Use a loop with `lo`/`hi` bounds (no `indexOf`). Also return the number of comparisons as a second value: return `[index, steps]`.
