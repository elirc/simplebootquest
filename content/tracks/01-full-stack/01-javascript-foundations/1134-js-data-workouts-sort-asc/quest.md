---
slug: "js-data-workouts-sort-asc"
title: "Data: Sort workouts by calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort workouts by calories burned

Return the labels sorted by `calories` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 40, calories: 353, kind: "cardio"},
  {id: 2, label: "Thu yoga", minutes: 85, calories: 296, kind: "mobility"},
  {id: 3, label: "Wed lift", minutes: 45, calories: 94, kind: "mobility"},
  {id: 4, label: "Mon run", minutes: 115, calories: 610, kind: "cardio"},
  {id: 5, label: "Wed swim", minutes: 117, calories: 632, kind: "mobility"},
  {id: 6, label: "Sun walk", minutes: 90, calories: 328, kind: "cardio"},
  {id: 7, label: "Fri run", minutes: 94, calories: 795, kind: "cardio"},
  {id: 8, label: "Tue run", minutes: 105, calories: 484, kind: "mobility"}
]
```
