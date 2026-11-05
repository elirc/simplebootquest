---
slug: "js-data-students-partition"
title: "Data: Split students by \"graduated\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split students by "graduated"

Return `{ yes, no }`: the names of students where `graduated` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Chen", score: 95, age: 22, course: "design", graduated: false},
  {id: 2, name: "Keiko", score: 66, age: 33, course: "web", graduated: false},
  {id: 3, name: "Hugo", score: 61, age: 30, course: "design", graduated: true},
  {id: 4, name: "Ines", score: 31, age: 28, course: "design", graduated: false},
  {id: 5, name: "Bilal", score: 99, age: 28, course: "web", graduated: false},
  {id: 6, name: "Luca", score: 37, age: 22, course: "web", graduated: true},
  {id: 7, name: "Gita", score: 60, age: 33, course: "data", graduated: false},
  {id: 8, name: "Femi", score: 53, age: 25, course: "data", graduated: true}
]
```
