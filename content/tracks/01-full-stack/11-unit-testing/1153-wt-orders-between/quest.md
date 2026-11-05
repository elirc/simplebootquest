---
slug: "wt-orders-between"
title: "Test It: Orders in a total (in cents) range"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Orders in a total (in cents) range

The **Code under test** tab has a correct `ordersInRange` and its dataset `ORDERS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the codes of orders whose `totalCents` is between `low` and `high` **inclusive**. Use `filter` and `map`.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
