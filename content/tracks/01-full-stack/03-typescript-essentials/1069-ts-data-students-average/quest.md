---
slug: "ts-data-students-average"
title: "Data: Average score"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average score

Return the average `score` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Luca", score: 35, age: 32, course: "data", graduated: false},
  {id: 2, name: "Chen", score: 69, age: 18, course: "design", graduated: true},
  {id: 3, name: "Keiko", score: 41, age: 18, course: "web", graduated: true},
  {id: 4, name: "Ines", score: 76, age: 25, course: "design", graduated: true},
  {id: 5, name: "Bilal", score: 47, age: 20, course: "design", graduated: true},
  {id: 6, name: "Dara", score: 83, age: 18, course: "data", graduated: true},
  {id: 7, name: "Elif", score: 87, age: 27, course: "data", graduated: false},
  {id: 8, name: "Gita", score: 42, age: 19, course: "web", graduated: false}
]
```

Type the parameters and the return value. The interface is already written for you.
