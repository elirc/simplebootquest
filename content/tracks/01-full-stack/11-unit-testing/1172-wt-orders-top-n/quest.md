---
slug: "wt-orders-top-n"
title: "Test It: Top orders by item count"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top orders by item count

The **Code under test** tab has a correct `topOrdersByItems` and its dataset `ORDERS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the codes of the `n` orders with the **highest** `items`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
