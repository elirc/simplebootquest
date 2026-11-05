---
slug: "js-data-workouts-update"
title: "Data: Update workouts immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update workouts immutably

Return a **new** array where every workout with `kind` equal to `value` has `calories` increased by `amount`. Other workouts are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Wed swim", minutes: 22, calories: 240, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 36, calories: 466, kind: "mobility"},
  {id: 3, label: "Tue swim", minutes: 58, calories: 705, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 26, calories: 126, kind: "cardio"},
  {id: 5, label: "Fri run", minutes: 111, calories: 160, kind: "strength"},
  {id: 6, label: "Fri yoga", minutes: 50, calories: 605, kind: "cardio"},
  {id: 7, label: "Mon lift", minutes: 56, calories: 480, kind: "strength"},
  {id: 8, label: "Sat ride", minutes: 99, calories: 838, kind: "strength"}
]
```
