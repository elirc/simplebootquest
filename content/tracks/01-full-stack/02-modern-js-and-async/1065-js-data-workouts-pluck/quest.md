---
slug: "js-data-workouts-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `label` and `calories` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Wed lift", minutes: 90, calories: 567, kind: "strength"},
  {id: 2, label: "Tue swim", minutes: 82, calories: 105, kind: "mobility"},
  {id: 3, label: "Fri yoga", minutes: 67, calories: 478, kind: "mobility"},
  {id: 4, label: "Fri run", minutes: 118, calories: 613, kind: "cardio"},
  {id: 5, label: "Thu ride", minutes: 50, calories: 878, kind: "strength"},
  {id: 6, label: "Thu yoga", minutes: 59, calories: 146, kind: "cardio"},
  {id: 7, label: "Sun walk", minutes: 60, calories: 453, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 26, calories: 558, kind: "strength"}
]
```
