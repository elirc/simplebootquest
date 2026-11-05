---
slug: "ts-data-courses-above"
title: "Data: Courses with a enrolments above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Courses with a enrolments above a limit

Return the title of every course whose `enrolled` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Accessibility", lessons: 29, enrolled: 2666, level: "advanced"},
  {id: 2, title: "Docker Intro", lessons: 44, enrolled: 2703, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 42, enrolled: 221, level: "advanced"},
  {id: 4, title: "GraphQL", lessons: 17, enrolled: 1199, level: "intermediate"},
  {id: 5, title: "Data Viz", lessons: 43, enrolled: 2558, level: "intermediate"},
  {id: 6, title: "Web Security", lessons: 34, enrolled: 191, level: "beginner"},
  {id: 7, title: "Node APIs", lessons: 32, enrolled: 3865, level: "intermediate"},
  {id: 8, title: "CSS Layouts", lessons: 38, enrolled: 4379, level: "beginner"}
]
```

Type the parameters and the return value. The interface is already written for you.
