---
slug: "debug-workouts-chain"
title: "Debug: Filter, sort, map: workouts in one kind"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: workouts in one kind

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the labels of workouts whose `kind` equals `value`, sorted by `calories` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Mon lift", minutes: 42, calories: 237, kind: "cardio"},
  {id: 2, label: "Fri yoga", minutes: 66, calories: 436, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 53, calories: 893, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 36, calories: 306, kind: "cardio"},
  {id: 5, label: "Sun walk", minutes: 39, calories: 352, kind: "mobility"},
  {id: 6, label: "Tue run", minutes: 95, calories: 498, kind: "cardio"},
  {id: 7, label: "Mon run", minutes: 119, calories: 408, kind: "mobility"},
  {id: 8, label: "Wed swim", minutes: 112, calories: 630, kind: "strength"}
]
```
