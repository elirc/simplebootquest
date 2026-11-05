---
slug: "ts-data-courses-min"
title: "Data: The course with the lowest lesson count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The course with the lowest lesson count

Return the title of the course with the **lowest** `lessons` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "GraphQL", lessons: 27, enrolled: 3733, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 6, enrolled: 3712, level: "advanced"},
  {id: 3, title: "CSS Layouts", lessons: 43, enrolled: 4077, level: "intermediate"},
  {id: 4, title: "Testing JS", lessons: 44, enrolled: 4460, level: "intermediate"},
  {id: 5, title: "Git Essentials", lessons: 40, enrolled: 1838, level: "intermediate"},
  {id: 6, title: "React Basics", lessons: 35, enrolled: 495, level: "intermediate"},
  {id: 7, title: "Accessibility", lessons: 48, enrolled: 3411, level: "advanced"},
  {id: 8, title: "Data Viz", lessons: 43, enrolled: 1069, level: "intermediate"}
]
```

Type the parameters and the return value. The interface is already written for you.
