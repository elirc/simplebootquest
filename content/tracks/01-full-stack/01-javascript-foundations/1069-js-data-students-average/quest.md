---
slug: "js-data-students-average"
title: "Data: Average age"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average age

Return the average `age` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Hugo", score: 94, age: 26, course: "web", graduated: false},
  {id: 2, name: "Keiko", score: 89, age: 32, course: "data", graduated: true},
  {id: 3, name: "Elif", score: 43, age: 22, course: "web", graduated: true},
  {id: 4, name: "Dara", score: 83, age: 29, course: "design", graduated: true},
  {id: 5, name: "Ines", score: 65, age: 22, course: "data", graduated: true},
  {id: 6, name: "Jonah", score: 65, age: 34, course: "data", graduated: true},
  {id: 7, name: "Gita", score: 67, age: 30, course: "data", graduated: true},
  {id: 8, name: "Femi", score: 74, age: 32, course: "data", graduated: true}
]
```
