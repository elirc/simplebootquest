---
slug: "js-data-students-between"
title: "Data: Students in a age range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Students in a age range

Return the names of students whose `age` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Femi", score: 51, age: 30, course: "design", graduated: true},
  {id: 2, name: "Luca", score: 57, age: 24, course: "data", graduated: true},
  {id: 3, name: "Jonah", score: 58, age: 27, course: "data", graduated: false},
  {id: 4, name: "Elif", score: 45, age: 31, course: "data", graduated: true},
  {id: 5, name: "Chen", score: 51, age: 25, course: "data", graduated: false},
  {id: 6, name: "Bilal", score: 89, age: 33, course: "web", graduated: false},
  {id: 7, name: "Ines", score: 34, age: 20, course: "design", graduated: true},
  {id: 8, name: "Keiko", score: 89, age: 28, course: "web", graduated: false}
]
```
