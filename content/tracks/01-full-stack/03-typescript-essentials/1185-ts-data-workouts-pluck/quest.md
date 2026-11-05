---
slug: "ts-data-workouts-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `label` and `minutes` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Thu yoga", minutes: 71, calories: 252, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 112, calories: 191, kind: "cardio"},
  {id: 3, label: "Wed swim", minutes: 102, calories: 452, kind: "strength"},
  {id: 4, label: "Thu ride", minutes: 16, calories: 855, kind: "cardio"},
  {id: 5, label: "Tue swim", minutes: 95, calories: 391, kind: "strength"},
  {id: 6, label: "Sat ride", minutes: 92, calories: 198, kind: "mobility"},
  {id: 7, label: "Wed lift", minutes: 53, calories: 520, kind: "cardio"},
  {id: 8, label: "Mon lift", minutes: 28, calories: 464, kind: "strength"}
]
```

Type the parameters and the return value. The interface is already written for you.
