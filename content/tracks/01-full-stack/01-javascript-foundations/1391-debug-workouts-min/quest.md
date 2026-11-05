---
slug: "debug-workouts-min"
title: "Debug: The workout with the lowest calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The workout with the lowest calories burned

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the label of the workout with the **lowest** `calories` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Thu ride", minutes: 59, calories: 370, kind: "mobility"},
  {id: 2, label: "Wed swim", minutes: 115, calories: 318, kind: "mobility"},
  {id: 3, label: "Mon run", minutes: 76, calories: 623, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 109, calories: 503, kind: "strength"},
  {id: 5, label: "Sat ride", minutes: 114, calories: 475, kind: "strength"},
  {id: 6, label: "Thu yoga", minutes: 80, calories: 318, kind: "cardio"},
  {id: 7, label: "Sun walk", minutes: 65, calories: 823, kind: "cardio"},
  {id: 8, label: "Fri yoga", minutes: 18, calories: 840, kind: "mobility"}
]
```
