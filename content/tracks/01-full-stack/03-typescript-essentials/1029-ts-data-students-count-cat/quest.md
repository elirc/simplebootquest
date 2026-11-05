---
slug: "ts-data-students-count-cat"
title: "Data: Count students by course"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count students by course

Return how many students have `course` equal to `value`.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Hugo", score: 49, age: 24, course: "data", graduated: false},
  {id: 2, name: "Elif", score: 36, age: 30, course: "design", graduated: true},
  {id: 3, name: "Luca", score: 39, age: 33, course: "design", graduated: true},
  {id: 4, name: "Amara", score: 45, age: 33, course: "design", graduated: true},
  {id: 5, name: "Dara", score: 55, age: 17, course: "data", graduated: false},
  {id: 6, name: "Keiko", score: 54, age: 28, course: "web", graduated: true},
  {id: 7, name: "Chen", score: 91, age: 21, course: "web", graduated: false},
  {id: 8, name: "Ines", score: 75, age: 29, course: "design", graduated: false}
]
```

Type the parameters and the return value. The interface is already written for you.
