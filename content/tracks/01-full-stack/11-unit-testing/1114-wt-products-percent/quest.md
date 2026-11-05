---
slug: "wt-products-percent"
title: "Test It: What share of products are on sale?"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: What share of products are on sale?

The **Code under test** tab has a correct `percentOnSale` and its dataset `PRODUCTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the percentage (0–100, rounded to a whole number) of products where `onSale` is true. Return 0 for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
