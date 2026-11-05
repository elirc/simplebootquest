---
slug: "js-data-workouts-nth"
title: "Data: The n-th workout by calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th workout by calories burned

Return the label of the workout ranked `n` (1 = highest `calories`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 47, calories: 637, kind: "strength"},
  {id: 2, label: "Fri run", minutes: 40, calories: 774, kind: "cardio"},
  {id: 3, label: "Sun walk", minutes: 58, calories: 389, kind: "strength"},
  {id: 4, label: "Thu ride", minutes: 57, calories: 121, kind: "mobility"},
  {id: 5, label: "Thu yoga", minutes: 61, calories: 642, kind: "cardio"},
  {id: 6, label: "Fri yoga", minutes: 102, calories: 299, kind: "mobility"},
  {id: 7, label: "Mon lift", minutes: 77, calories: 830, kind: "strength"},
  {id: 8, label: "Mon run", minutes: 53, calories: 449, kind: "cardio"}
]
```
