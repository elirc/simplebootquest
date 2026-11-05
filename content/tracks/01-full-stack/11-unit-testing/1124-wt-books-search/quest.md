---
slug: "wt-books-search"
title: "Test It: Search books by title"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Search books by title

The **Code under test** tab has a correct `searchBooks` and its dataset `BOOKS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
