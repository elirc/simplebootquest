---
slug: "ts-data-students-above"
title: "Data: Students with a age above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Students with a age above a limit

Return the name of every student whose `age` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Hugo", score: 66, age: 32, course: "design", graduated: false},
  {id: 2, name: "Amara", score: 56, age: 18, course: "web", graduated: true},
  {id: 3, name: "Femi", score: 43, age: 20, course: "design", graduated: false},
  {id: 4, name: "Jonah", score: 84, age: 22, course: "data", graduated: false},
  {id: 5, name: "Gita", score: 48, age: 27, course: "design", graduated: true},
  {id: 6, name: "Elif", score: 42, age: 18, course: "web", graduated: false},
  {id: 7, name: "Chen", score: 46, age: 22, course: "data", graduated: true},
  {id: 8, name: "Ines", score: 38, age: 24, course: "web", graduated: true}
]
```

Type the parameters and the return value. The interface is already written for you.
