---
slug: "js-data-students-sort-asc"
title: "Data: Sort students by score"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort students by score

Return the names sorted by `score` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Hugo", score: 60, age: 25, course: "data", graduated: false},
  {id: 2, name: "Keiko", score: 61, age: 24, course: "data", graduated: true},
  {id: 3, name: "Elif", score: 79, age: 30, course: "data", graduated: false},
  {id: 4, name: "Ines", score: 49, age: 23, course: "web", graduated: true},
  {id: 5, name: "Femi", score: 91, age: 22, course: "design", graduated: true},
  {id: 6, name: "Amara", score: 68, age: 20, course: "design", graduated: true},
  {id: 7, name: "Jonah", score: 44, age: 24, course: "data", graduated: false},
  {id: 8, name: "Dara", score: 80, age: 23, course: "web", graduated: true}
]
```
