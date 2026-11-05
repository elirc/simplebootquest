---
slug: "debug-students-update"
title: "Debug: Update students immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Update students immutably

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return a **new** array where every student with `course` equal to `value` has `score` increased by `amount`. Other students are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Elif", score: 74, age: 33, course: "web", graduated: true},
  {id: 2, name: "Jonah", score: 54, age: 24, course: "web", graduated: false},
  {id: 3, name: "Chen", score: 49, age: 32, course: "data", graduated: true},
  {id: 4, name: "Ines", score: 82, age: 18, course: "web", graduated: true},
  {id: 5, name: "Bilal", score: 87, age: 29, course: "web", graduated: true},
  {id: 6, name: "Hugo", score: 91, age: 31, course: "data", graduated: false},
  {id: 7, name: "Dara", score: 44, age: 21, course: "web", graduated: false},
  {id: 8, name: "Femi", score: 32, age: 28, course: "data", graduated: false}
]
```
