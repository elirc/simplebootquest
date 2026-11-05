---
slug: "js-data-students-percent"
title: "Data: What share of students are graduated?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of students are graduated?

Return the percentage (0–100, rounded to a whole number) of students where `graduated` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Jonah", score: 45, age: 33, course: "data", graduated: false},
  {id: 2, name: "Dara", score: 70, age: 30, course: "design", graduated: true},
  {id: 3, name: "Amara", score: 49, age: 29, course: "data", graduated: false},
  {id: 4, name: "Bilal", score: 78, age: 30, course: "web", graduated: true},
  {id: 5, name: "Hugo", score: 36, age: 32, course: "design", graduated: true},
  {id: 6, name: "Ines", score: 68, age: 29, course: "design", graduated: true},
  {id: 7, name: "Chen", score: 55, age: 30, course: "design", graduated: true},
  {id: 8, name: "Gita", score: 79, age: 19, course: "web", graduated: false}
]
```
