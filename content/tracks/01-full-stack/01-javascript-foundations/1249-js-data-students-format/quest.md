---
slug: "js-data-students-format"
title: "Data: Format students as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format students as labels

Return one string per student: `"<name> (<age>)"`, e.g. `"Elif (32)"`.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Elif", score: 99, age: 32, course: "web", graduated: true},
  {id: 2, name: "Jonah", score: 79, age: 24, course: "web", graduated: false},
  {id: 3, name: "Gita", score: 34, age: 19, course: "web", graduated: false},
  {id: 4, name: "Bilal", score: 43, age: 27, course: "data", graduated: true},
  {id: 5, name: "Dara", score: 95, age: 25, course: "web", graduated: false},
  {id: 6, name: "Hugo", score: 63, age: 26, course: "design", graduated: true},
  {id: 7, name: "Keiko", score: 96, age: 24, course: "data", graduated: true},
  {id: 8, name: "Femi", score: 93, age: 18, course: "data", graduated: false}
]
```
