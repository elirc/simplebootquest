---
slug: "js-data-students-top-n"
title: "Data: Top students by age"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top students by age

Return the names of the `n` students with the **highest** `age`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Keiko", score: 98, age: 24, course: "web", graduated: true},
  {id: 2, name: "Chen", score: 74, age: 27, course: "data", graduated: true},
  {id: 3, name: "Bilal", score: 87, age: 32, course: "web", graduated: false},
  {id: 4, name: "Elif", score: 49, age: 24, course: "web", graduated: true},
  {id: 5, name: "Jonah", score: 54, age: 28, course: "design", graduated: false},
  {id: 6, name: "Dara", score: 40, age: 33, course: "design", graduated: true},
  {id: 7, name: "Amara", score: 64, age: 25, course: "data", graduated: false},
  {id: 8, name: "Ines", score: 44, age: 28, course: "design", graduated: false}
]
```
