---
slug: "ts-data-workouts-count-cat"
title: "Data: Count workouts by kind"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count workouts by kind

Return how many workouts have `kind` equal to `value`.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 51, calories: 498, kind: "mobility"},
  {id: 2, label: "Tue run", minutes: 103, calories: 146, kind: "strength"},
  {id: 3, label: "Wed swim", minutes: 47, calories: 518, kind: "cardio"},
  {id: 4, label: "Thu yoga", minutes: 104, calories: 194, kind: "cardio"},
  {id: 5, label: "Sun walk", minutes: 50, calories: 286, kind: "mobility"},
  {id: 6, label: "Sat ride", minutes: 18, calories: 498, kind: "strength"},
  {id: 7, label: "Fri run", minutes: 29, calories: 567, kind: "strength"},
  {id: 8, label: "Tue swim", minutes: 32, calories: 384, kind: "strength"}
]
```

Type the parameters and the return value. The interface is already written for you.
