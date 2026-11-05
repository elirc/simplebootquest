---
slug: "wt-transactions-top-n"
title: "Test It: Top transactions by day of the month"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top transactions by day of the month

The **Code under test** tab has a correct `topTransactionsByDay` and its dataset `TRANSACTIONS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the references of the `n` transactions with the **highest** `day`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
