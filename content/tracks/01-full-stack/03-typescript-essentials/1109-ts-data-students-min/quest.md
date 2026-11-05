---
slug: "ts-data-students-min"
title: "Data: The student with the lowest score"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The student with the lowest score

Return the name of the student with the **lowest** `score` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Amara", score: 74, age: 23, course: "web", graduated: false},
  {id: 2, name: "Elif", score: 72, age: 17, course: "data", graduated: false},
  {id: 3, name: "Femi", score: 86, age: 28, course: "design", graduated: false},
  {id: 4, name: "Keiko", score: 65, age: 22, course: "web", graduated: true},
  {id: 5, name: "Chen", score: 92, age: 30, course: "web", graduated: false},
  {id: 6, name: "Dara", score: 35, age: 19, course: "data", graduated: false},
  {id: 7, name: "Luca", score: 91, age: 29, course: "web", graduated: false},
  {id: 8, name: "Gita", score: 93, age: 20, course: "data", graduated: false}
]
```

Type the parameters and the return value. The interface is already written for you.
