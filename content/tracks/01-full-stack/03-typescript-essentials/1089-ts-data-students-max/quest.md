---
slug: "ts-data-students-max"
title: "Data: The student with the highest age"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The student with the highest age

Return the name of the student with the **highest** `age`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Gita", score: 43, age: 32, course: "web", graduated: true},
  {id: 2, name: "Ines", score: 97, age: 30, course: "data", graduated: false},
  {id: 3, name: "Chen", score: 54, age: 21, course: "design", graduated: false},
  {id: 4, name: "Jonah", score: 71, age: 32, course: "design", graduated: true},
  {id: 5, name: "Keiko", score: 80, age: 24, course: "web", graduated: false},
  {id: 6, name: "Elif", score: 86, age: 32, course: "design", graduated: false},
  {id: 7, name: "Hugo", score: 65, age: 18, course: "web", graduated: true},
  {id: 8, name: "Bilal", score: 43, age: 26, course: "data", graduated: true}
]
```

Type the parameters and the return value. The interface is already written for you.
