---
slug: "js-data-students-above"
title: "Data: Students with a score above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Students with a score above a limit

Return the name of every student whose `score` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Hugo", score: 63, age: 33, course: "data", graduated: false},
  {id: 2, name: "Gita", score: 98, age: 34, course: "web", graduated: false},
  {id: 3, name: "Dara", score: 43, age: 31, course: "data", graduated: false},
  {id: 4, name: "Ines", score: 82, age: 21, course: "web", graduated: true},
  {id: 5, name: "Femi", score: 38, age: 29, course: "web", graduated: false},
  {id: 6, name: "Chen", score: 92, age: 19, course: "data", graduated: false},
  {id: 7, name: "Jonah", score: 97, age: 26, course: "web", graduated: true},
  {id: 8, name: "Elif", score: 33, age: 27, course: "data", graduated: true}
]
```
