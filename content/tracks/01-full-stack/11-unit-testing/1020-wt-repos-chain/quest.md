---
slug: "wt-repos-chain"
title: "Test It: Filter, sort, map: repos in one language"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: repos in one language

The **Code under test** tab has a correct `reposInLanguageRanked` and its dataset `REPOS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of repos whose `language` equals `value`, sorted by `stars` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
