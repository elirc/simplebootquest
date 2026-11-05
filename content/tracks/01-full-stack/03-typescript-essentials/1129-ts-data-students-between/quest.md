---
slug: "ts-data-students-between"
title: "Data: Students in a age range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Students in a age range

Return the names of students whose `age` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Amara", score: 58, age: 24, course: "design", graduated: false},
  {id: 2, name: "Femi", score: 71, age: 30, course: "design", graduated: true},
  {id: 3, name: "Dara", score: 32, age: 28, course: "web", graduated: false},
  {id: 4, name: "Elif", score: 63, age: 19, course: "web", graduated: false},
  {id: 5, name: "Gita", score: 76, age: 20, course: "data", graduated: false},
  {id: 6, name: "Jonah", score: 33, age: 28, course: "data", graduated: true},
  {id: 7, name: "Keiko", score: 68, age: 19, course: "data", graduated: true},
  {id: 8, name: "Luca", score: 71, age: 33, course: "design", graduated: false}
]
```

Type the parameters and the return value. The interface is already written for you.
