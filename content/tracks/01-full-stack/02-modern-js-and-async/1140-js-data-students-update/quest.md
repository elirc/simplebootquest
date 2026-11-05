---
slug: "js-data-students-update"
title: "Data: Update students immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update students immutably

Return a **new** array where every student with `course` equal to `value` has `age` increased by `amount`. Other students are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Hugo", score: 41, age: 29, course: "design", graduated: true},
  {id: 2, name: "Amara", score: 76, age: 25, course: "design", graduated: false},
  {id: 3, name: "Jonah", score: 94, age: 23, course: "web", graduated: true},
  {id: 4, name: "Dara", score: 54, age: 31, course: "design", graduated: true},
  {id: 5, name: "Bilal", score: 99, age: 29, course: "data", graduated: true},
  {id: 6, name: "Ines", score: 91, age: 23, course: "web", graduated: true},
  {id: 7, name: "Gita", score: 47, age: 34, course: "web", graduated: true},
  {id: 8, name: "Elif", score: 58, age: 24, course: "data", graduated: true}
]
```
