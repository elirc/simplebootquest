---
slug: "debug-workouts-between"
title: "Debug: Workouts in a calories burned range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Workouts in a calories burned range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the labels of workouts whose `calories` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Mon run", minutes: 92, calories: 99, kind: "mobility"},
  {id: 2, label: "Thu ride", minutes: 60, calories: 628, kind: "strength"},
  {id: 3, label: "Fri run", minutes: 23, calories: 262, kind: "strength"},
  {id: 4, label: "Sun walk", minutes: 44, calories: 870, kind: "strength"},
  {id: 5, label: "Tue run", minutes: 116, calories: 152, kind: "strength"},
  {id: 6, label: "Wed swim", minutes: 91, calories: 651, kind: "mobility"},
  {id: 7, label: "Thu yoga", minutes: 87, calories: 272, kind: "cardio"},
  {id: 8, label: "Sat ride", minutes: 69, calories: 861, kind: "cardio"}
]
```
