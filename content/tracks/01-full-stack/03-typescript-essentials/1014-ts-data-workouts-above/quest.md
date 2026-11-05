---
slug: "ts-data-workouts-above"
title: "Data: Workouts with a duration (minutes) above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Workouts with a duration (minutes) above a limit

Return the label of every workout whose `minutes` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 30, calories: 401, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 26, calories: 696, kind: "cardio"},
  {id: 3, label: "Fri yoga", minutes: 107, calories: 761, kind: "strength"},
  {id: 4, label: "Sat ride", minutes: 109, calories: 347, kind: "mobility"},
  {id: 5, label: "Mon lift", minutes: 72, calories: 243, kind: "strength"},
  {id: 6, label: "Tue run", minutes: 35, calories: 177, kind: "strength"},
  {id: 7, label: "Wed lift", minutes: 29, calories: 668, kind: "cardio"},
  {id: 8, label: "Thu ride", minutes: 25, calories: 809, kind: "strength"}
]
```

Type the parameters and the return value. The interface is already written for you.
