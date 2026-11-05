---
slug: "js-p-merge-sorted"
title: "Practice: Merge Two Sorted Arrays"
type: "code"
language: "js"
xp: 15
hints: ["Push the smaller of `a[i]` and `b[j]` and advance that pointer."]
---
# Practice: Merge Two Sorted Arrays

Merging sorted lists is the heart of merge sort, and of combining paginated results from two sources.

## Your task
`mergeSorted(a, b)` merges two ascending arrays into one ascending array in **O(n + m)**: walk both with two pointers, and don't just concatenate and sort.
