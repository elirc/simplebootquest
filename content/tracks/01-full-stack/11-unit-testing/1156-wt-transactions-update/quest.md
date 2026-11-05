---
slug: "wt-transactions-update"
title: "Test It: Update transactions immutably"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Update transactions immutably

The **Code under test** tab has a correct `bumpDay` and its dataset `TRANSACTIONS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return a **new** array where every transaction with `category` equal to `value` has `day` increased by `amount`. Other transactions are unchanged. **Don't mutate** the input objects (React state depends on this).

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
