---
slug: "js-data-workouts-sum"
title: "Data: Total calories burned of all workouts"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total calories burned of all workouts

Return the sum of `calories` across all workouts. An empty list totals 0.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 23, calories: 542, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 98, calories: 383, kind: "strength"},
  {id: 3, label: "Tue run", minutes: 28, calories: 595, kind: "mobility"},
  {id: 4, label: "Mon lift", minutes: 113, calories: 752, kind: "cardio"},
  {id: 5, label: "Wed swim", minutes: 75, calories: 873, kind: "cardio"},
  {id: 6, label: "Mon run", minutes: 75, calories: 850, kind: "cardio"},
  {id: 7, label: "Fri yoga", minutes: 105, calories: 405, kind: "mobility"},
  {id: 8, label: "Sat ride", minutes: 36, calories: 890, kind: "cardio"}
]
```
