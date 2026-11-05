---
slug: "wt-courses-chain"
title: "Test It: Filter, sort, map: courses in one level"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: courses in one level

The **Code under test** tab has a correct `coursesInLevelRanked` and its dataset `COURSES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the titles of courses whose `level` equals `value`, sorted by `lessons` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
