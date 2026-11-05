---
slug: "debug-workouts-top-n"
title: "Debug: Top workouts by duration (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top workouts by duration (minutes)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the labels of the `n` workouts with the **highest** `minutes`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 93, calories: 677, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 106, calories: 883, kind: "cardio"},
  {id: 3, label: "Mon lift", minutes: 70, calories: 669, kind: "mobility"},
  {id: 4, label: "Tue run", minutes: 118, calories: 393, kind: "strength"},
  {id: 5, label: "Thu ride", minutes: 112, calories: 574, kind: "strength"},
  {id: 6, label: "Wed lift", minutes: 47, calories: 698, kind: "cardio"},
  {id: 7, label: "Wed swim", minutes: 115, calories: 90, kind: "cardio"},
  {id: 8, label: "Thu yoga", minutes: 25, calories: 392, kind: "cardio"}
]
```
