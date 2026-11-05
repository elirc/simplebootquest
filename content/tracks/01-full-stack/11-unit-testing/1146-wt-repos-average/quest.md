---
slug: "wt-repos-average"
title: "Test It: Average open issues"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Average open issues

The **Code under test** tab has a correct `averageOpenIssues` and its dataset `REPOS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the average `openIssues` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
