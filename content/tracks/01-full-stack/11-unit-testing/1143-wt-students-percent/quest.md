---
slug: "wt-students-percent"
title: "Test It: What share of students are graduated?"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: What share of students are graduated?

The **Code under test** tab has a correct `percentGraduated` and its dataset `STUDENTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the percentage (0–100, rounded to a whole number) of students where `graduated` is true. Return 0 for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
