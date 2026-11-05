---
slug: "js-data-workouts-above"
title: "Data: Workouts with a calories burned above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Workouts with a calories burned above a limit

Return the label of every workout whose `calories` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Wed swim", minutes: 17, calories: 827, kind: "cardio"},
  {id: 2, label: "Wed lift", minutes: 29, calories: 821, kind: "strength"},
  {id: 3, label: "Sat ride", minutes: 96, calories: 469, kind: "strength"},
  {id: 4, label: "Fri run", minutes: 75, calories: 462, kind: "cardio"},
  {id: 5, label: "Tue run", minutes: 34, calories: 559, kind: "cardio"},
  {id: 6, label: "Mon run", minutes: 108, calories: 350, kind: "strength"},
  {id: 7, label: "Sun walk", minutes: 97, calories: 724, kind: "cardio"},
  {id: 8, label: "Mon lift", minutes: 43, calories: 717, kind: "mobility"}
]
```
