---
slug: "js-data-workouts-average"
title: "Data: Average calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average calories burned

Return the average `calories` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Fri run", minutes: 50, calories: 320, kind: "mobility"},
  {id: 2, label: "Tue swim", minutes: 22, calories: 185, kind: "mobility"},
  {id: 3, label: "Fri yoga", minutes: 18, calories: 534, kind: "strength"},
  {id: 4, label: "Wed lift", minutes: 115, calories: 834, kind: "mobility"},
  {id: 5, label: "Sat ride", minutes: 27, calories: 842, kind: "strength"},
  {id: 6, label: "Sun walk", minutes: 64, calories: 850, kind: "cardio"},
  {id: 7, label: "Mon run", minutes: 109, calories: 562, kind: "strength"},
  {id: 8, label: "Tue run", minutes: 50, calories: 323, kind: "mobility"}
]
```
