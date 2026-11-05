---
slug: "js-data-students-min"
title: "Data: The student with the lowest score"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The student with the lowest score

Return the name of the student with the **lowest** `score` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Luca", score: 46, age: 29, course: "data", graduated: false},
  {id: 2, name: "Keiko", score: 53, age: 23, course: "data", graduated: false},
  {id: 3, name: "Gita", score: 84, age: 27, course: "web", graduated: true},
  {id: 4, name: "Hugo", score: 39, age: 33, course: "design", graduated: true},
  {id: 5, name: "Ines", score: 52, age: 28, course: "web", graduated: false},
  {id: 6, name: "Bilal", score: 55, age: 25, course: "web", graduated: false},
  {id: 7, name: "Dara", score: 85, age: 31, course: "web", graduated: true},
  {id: 8, name: "Chen", score: 34, age: 25, course: "design", graduated: false}
]
```
