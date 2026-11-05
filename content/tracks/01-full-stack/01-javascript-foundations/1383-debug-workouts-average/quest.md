---
slug: "debug-workouts-average"
title: "Debug: Average calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average calories burned

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `calories` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 26, calories: 798, kind: "strength"},
  {id: 2, label: "Wed swim", minutes: 46, calories: 409, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 20, calories: 759, kind: "mobility"},
  {id: 4, label: "Tue run", minutes: 70, calories: 574, kind: "strength"},
  {id: 5, label: "Thu yoga", minutes: 97, calories: 216, kind: "cardio"},
  {id: 6, label: "Wed lift", minutes: 86, calories: 399, kind: "cardio"},
  {id: 7, label: "Sat ride", minutes: 54, calories: 757, kind: "mobility"},
  {id: 8, label: "Fri yoga", minutes: 49, calories: 351, kind: "cardio"}
]
```
