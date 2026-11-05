---
slug: "ts-data-students-percent"
title: "Data: What share of students are graduated?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of students are graduated?

Return the percentage (0–100, rounded to a whole number) of students where `graduated` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Chen", score: 33, age: 17, course: "data", graduated: true},
  {id: 2, name: "Gita", score: 73, age: 29, course: "design", graduated: false},
  {id: 3, name: "Ines", score: 44, age: 27, course: "design", graduated: false},
  {id: 4, name: "Dara", score: 44, age: 27, course: "data", graduated: true},
  {id: 5, name: "Femi", score: 35, age: 22, course: "design", graduated: false},
  {id: 6, name: "Keiko", score: 49, age: 33, course: "data", graduated: false},
  {id: 7, name: "Elif", score: 60, age: 26, course: "web", graduated: true},
  {id: 8, name: "Jonah", score: 100, age: 23, course: "design", graduated: true}
]
```

Type the parameters and the return value. The interface is already written for you.
