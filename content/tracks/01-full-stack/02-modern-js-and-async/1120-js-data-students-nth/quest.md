---
slug: "js-data-students-nth"
title: "Data: The n-th student by age"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th student by age

Return the name of the student ranked `n` (1 = highest `age`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Hugo", score: 47, age: 20, course: "design", graduated: true},
  {id: 2, name: "Femi", score: 45, age: 17, course: "design", graduated: true},
  {id: 3, name: "Elif", score: 36, age: 27, course: "web", graduated: true},
  {id: 4, name: "Gita", score: 61, age: 25, course: "web", graduated: true},
  {id: 5, name: "Ines", score: 92, age: 17, course: "data", graduated: false},
  {id: 6, name: "Keiko", score: 68, age: 25, course: "web", graduated: false},
  {id: 7, name: "Luca", score: 43, age: 34, course: "data", graduated: false},
  {id: 8, name: "Chen", score: 38, age: 24, course: "data", graduated: true}
]
```
