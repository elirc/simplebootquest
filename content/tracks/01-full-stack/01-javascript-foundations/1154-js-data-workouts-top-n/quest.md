---
slug: "js-data-workouts-top-n"
title: "Data: Top workouts by calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top workouts by calories burned

Return the labels of the `n` workouts with the **highest** `calories`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 107, calories: 161, kind: "strength"},
  {id: 2, label: "Thu ride", minutes: 95, calories: 298, kind: "strength"},
  {id: 3, label: "Tue run", minutes: 97, calories: 541, kind: "mobility"},
  {id: 4, label: "Fri run", minutes: 106, calories: 325, kind: "strength"},
  {id: 5, label: "Mon lift", minutes: 90, calories: 828, kind: "mobility"},
  {id: 6, label: "Sat ride", minutes: 44, calories: 293, kind: "cardio"},
  {id: 7, label: "Wed swim", minutes: 46, calories: 619, kind: "cardio"},
  {id: 8, label: "Fri yoga", minutes: 111, calories: 156, kind: "strength"}
]
```
