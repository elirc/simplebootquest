---
slug: "debug-workouts-count-cat"
title: "Debug: Count workouts by kind"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count workouts by kind

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many workouts have `kind` equal to `value`.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 114, calories: 221, kind: "cardio"},
  {id: 2, label: "Sat ride", minutes: 29, calories: 538, kind: "mobility"},
  {id: 3, label: "Mon run", minutes: 82, calories: 845, kind: "cardio"},
  {id: 4, label: "Tue swim", minutes: 58, calories: 865, kind: "cardio"},
  {id: 5, label: "Wed swim", minutes: 71, calories: 883, kind: "mobility"},
  {id: 6, label: "Thu ride", minutes: 92, calories: 136, kind: "cardio"},
  {id: 7, label: "Tue run", minutes: 70, calories: 498, kind: "cardio"},
  {id: 8, label: "Thu yoga", minutes: 53, calories: 284, kind: "strength"}
]
```
