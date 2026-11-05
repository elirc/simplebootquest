---
slug: "ts-data-workouts-between"
title: "Data: Workouts in a duration (minutes) range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Workouts in a duration (minutes) range

Return the labels of workouts whose `minutes` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 91, calories: 752, kind: "strength"},
  {id: 2, label: "Fri yoga", minutes: 29, calories: 185, kind: "strength"},
  {id: 3, label: "Sat ride", minutes: 77, calories: 469, kind: "cardio"},
  {id: 4, label: "Thu yoga", minutes: 44, calories: 795, kind: "mobility"},
  {id: 5, label: "Sun walk", minutes: 79, calories: 280, kind: "mobility"},
  {id: 6, label: "Mon lift", minutes: 19, calories: 618, kind: "mobility"},
  {id: 7, label: "Thu ride", minutes: 32, calories: 822, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 78, calories: 785, kind: "mobility"}
]
```

Type the parameters and the return value. The interface is already written for you.
