---
slug: "js-data-workouts-avg-per"
title: "Data: Average calories burned per kind"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average calories burned per kind

Return an object mapping each `kind` to the average `calories` of its workouts, rounded to a whole number.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 43, calories: 845, kind: "mobility"},
  {id: 2, label: "Thu ride", minutes: 93, calories: 634, kind: "strength"},
  {id: 3, label: "Sun walk", minutes: 103, calories: 799, kind: "mobility"},
  {id: 4, label: "Wed swim", minutes: 16, calories: 764, kind: "strength"},
  {id: 5, label: "Mon run", minutes: 95, calories: 182, kind: "cardio"},
  {id: 6, label: "Fri yoga", minutes: 61, calories: 844, kind: "strength"},
  {id: 7, label: "Wed lift", minutes: 64, calories: 762, kind: "mobility"},
  {id: 8, label: "Tue run", minutes: 53, calories: 675, kind: "cardio"}
]
```
