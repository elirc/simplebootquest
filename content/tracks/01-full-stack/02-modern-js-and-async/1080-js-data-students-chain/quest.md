---
slug: "js-data-students-chain"
title: "Data: Filter, sort, map: students in one course"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: students in one course

Return the names of students whose `course` equals `value`, sorted by `score` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Keiko", score: 85, age: 22, course: "data", graduated: true},
  {id: 2, name: "Gita", score: 65, age: 28, course: "design", graduated: true},
  {id: 3, name: "Hugo", score: 80, age: 31, course: "design", graduated: false},
  {id: 4, name: "Amara", score: 59, age: 19, course: "data", graduated: false},
  {id: 5, name: "Ines", score: 73, age: 20, course: "data", graduated: false},
  {id: 6, name: "Chen", score: 74, age: 17, course: "data", graduated: false},
  {id: 7, name: "Luca", score: 66, age: 19, course: "web", graduated: false},
  {id: 8, name: "Femi", score: 96, age: 18, course: "web", graduated: false}
]
```
