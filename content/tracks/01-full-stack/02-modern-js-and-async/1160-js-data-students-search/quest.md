---
slug: "js-data-students-search"
title: "Data: Search students by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search students by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Dara", score: 37, age: 33, course: "web", graduated: false},
  {id: 2, name: "Keiko", score: 87, age: 32, course: "data", graduated: true},
  {id: 3, name: "Amara", score: 85, age: 25, course: "web", graduated: false},
  {id: 4, name: "Hugo", score: 93, age: 22, course: "data", graduated: true},
  {id: 5, name: "Femi", score: 63, age: 30, course: "design", graduated: false},
  {id: 6, name: "Ines", score: 86, age: 27, course: "web", graduated: false},
  {id: 7, name: "Chen", score: 64, age: 26, course: "web", graduated: false},
  {id: 8, name: "Luca", score: 80, age: 19, course: "design", graduated: true}
]
```
