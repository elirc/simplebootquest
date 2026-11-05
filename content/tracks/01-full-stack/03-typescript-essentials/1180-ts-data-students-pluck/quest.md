---
slug: "ts-data-students-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `age` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Elif", score: 37, age: 20, course: "design", graduated: false},
  {id: 2, name: "Femi", score: 72, age: 33, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 53, age: 30, course: "data", graduated: false},
  {id: 4, name: "Jonah", score: 71, age: 33, course: "design", graduated: true},
  {id: 5, name: "Amara", score: 69, age: 25, course: "web", graduated: false},
  {id: 6, name: "Keiko", score: 57, age: 31, course: "data", graduated: false},
  {id: 7, name: "Ines", score: 75, age: 17, course: "web", graduated: true},
  {id: 8, name: "Bilal", score: 71, age: 29, course: "data", graduated: true}
]
```

Type the parameters and the return value. The interface is already written for you.
