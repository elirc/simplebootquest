---
slug: "js-data-workouts-unique"
title: "Data: Distinct kind values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct kind values

Return every distinct `kind` that appears, sorted alphabetically.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Thu yoga", minutes: 92, calories: 394, kind: "strength"},
  {id: 2, label: "Tue swim", minutes: 38, calories: 766, kind: "strength"},
  {id: 3, label: "Sun walk", minutes: 18, calories: 693, kind: "cardio"},
  {id: 4, label: "Sat ride", minutes: 57, calories: 852, kind: "mobility"},
  {id: 5, label: "Wed swim", minutes: 35, calories: 515, kind: "cardio"},
  {id: 6, label: "Fri yoga", minutes: 39, calories: 645, kind: "mobility"},
  {id: 7, label: "Fri run", minutes: 54, calories: 866, kind: "strength"},
  {id: 8, label: "Tue run", minutes: 26, calories: 595, kind: "mobility"}
]
```
