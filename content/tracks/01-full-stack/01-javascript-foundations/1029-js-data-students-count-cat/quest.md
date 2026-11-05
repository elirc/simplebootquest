---
slug: "js-data-students-count-cat"
title: "Data: Count students by course"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count students by course

Return how many students have `course` equal to `value`.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Bilal", score: 72, age: 20, course: "data", graduated: false},
  {id: 2, name: "Amara", score: 88, age: 24, course: "data", graduated: false},
  {id: 3, name: "Jonah", score: 40, age: 20, course: "data", graduated: true},
  {id: 4, name: "Dara", score: 53, age: 20, course: "web", graduated: true},
  {id: 5, name: "Hugo", score: 46, age: 19, course: "web", graduated: true},
  {id: 6, name: "Elif", score: 34, age: 28, course: "data", graduated: true},
  {id: 7, name: "Ines", score: 94, age: 34, course: "design", graduated: true},
  {id: 8, name: "Gita", score: 61, age: 19, course: "design", graduated: true}
]
```
