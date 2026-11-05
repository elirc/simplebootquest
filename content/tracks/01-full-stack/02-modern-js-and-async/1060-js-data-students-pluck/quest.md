---
slug: "js-data-students-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `age` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Jonah", score: 72, age: 26, course: "web", graduated: true},
  {id: 2, name: "Chen", score: 84, age: 24, course: "data", graduated: true},
  {id: 3, name: "Dara", score: 64, age: 25, course: "data", graduated: false},
  {id: 4, name: "Amara", score: 36, age: 18, course: "data", graduated: false},
  {id: 5, name: "Hugo", score: 92, age: 18, course: "design", graduated: false},
  {id: 6, name: "Femi", score: 71, age: 26, course: "web", graduated: true},
  {id: 7, name: "Gita", score: 61, age: 33, course: "data", graduated: false},
  {id: 8, name: "Keiko", score: 58, age: 20, course: "web", graduated: true}
]
```
