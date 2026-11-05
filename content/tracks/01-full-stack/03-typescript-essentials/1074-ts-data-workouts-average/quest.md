---
slug: "ts-data-workouts-average"
title: "Data: Average calories burned"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average calories burned

Return the average `calories` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 15, calories: 518, kind: "strength"},
  {id: 2, label: "Tue run", minutes: 27, calories: 280, kind: "mobility"},
  {id: 3, label: "Thu ride", minutes: 88, calories: 249, kind: "mobility"},
  {id: 4, label: "Wed lift", minutes: 18, calories: 715, kind: "cardio"},
  {id: 5, label: "Sun walk", minutes: 19, calories: 897, kind: "cardio"},
  {id: 6, label: "Fri run", minutes: 110, calories: 733, kind: "mobility"},
  {id: 7, label: "Fri yoga", minutes: 87, calories: 632, kind: "cardio"},
  {id: 8, label: "Wed swim", minutes: 85, calories: 361, kind: "strength"}
]
```

Type the parameters and the return value. The interface is already written for you.
