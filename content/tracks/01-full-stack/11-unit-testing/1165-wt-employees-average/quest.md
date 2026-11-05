---
slug: "wt-employees-average"
title: "Test It: Average years at the company"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Average years at the company

The **Code under test** tab has a correct `averageYearsAtCompany` and its dataset `EMPLOYEES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the average `yearsAtCompany` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
