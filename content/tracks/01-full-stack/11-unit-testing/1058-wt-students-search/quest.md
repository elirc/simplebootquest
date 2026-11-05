---
slug: "wt-students-search"
title: "Test It: Search students by name"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Search students by name

The **Code under test** tab has a correct `searchStudents` and its dataset `STUDENTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
