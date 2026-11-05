---
slug: "ts-data-workouts-sum"
title: "Data: Total duration (minutes) of all workouts"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total duration (minutes) of all workouts

Return the sum of `minutes` across all workouts. An empty list totals 0.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 114, calories: 313, kind: "strength"},
  {id: 2, label: "Wed lift", minutes: 100, calories: 435, kind: "strength"},
  {id: 3, label: "Thu ride", minutes: 71, calories: 736, kind: "cardio"},
  {id: 4, label: "Fri yoga", minutes: 114, calories: 263, kind: "mobility"},
  {id: 5, label: "Tue run", minutes: 51, calories: 881, kind: "strength"},
  {id: 6, label: "Mon run", minutes: 97, calories: 427, kind: "strength"},
  {id: 7, label: "Mon lift", minutes: 19, calories: 751, kind: "strength"},
  {id: 8, label: "Fri run", minutes: 25, calories: 565, kind: "mobility"}
]
```

Type the parameters and the return value. The interface is already written for you.
