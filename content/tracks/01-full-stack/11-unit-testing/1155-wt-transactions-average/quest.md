---
slug: "wt-transactions-average"
title: "Test It: Average amount"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Average amount

The **Code under test** tab has a correct `averageAmount` and its dataset `TRANSACTIONS`. Write tests that pass against it **and** catch 4 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the average `amount` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
