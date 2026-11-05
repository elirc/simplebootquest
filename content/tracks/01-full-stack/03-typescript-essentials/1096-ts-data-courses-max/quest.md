---
slug: "ts-data-courses-max"
title: "Data: The course with the highest lesson count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The course with the highest lesson count

Return the title of the course with the **highest** `lessons`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "GraphQL", lessons: 15, enrolled: 170, level: "beginner"},
  {id: 2, title: "Accessibility", lessons: 32, enrolled: 3161, level: "beginner"},
  {id: 3, title: "Docker Intro", lessons: 13, enrolled: 619, level: "advanced"},
  {id: 4, title: "Data Viz", lessons: 46, enrolled: 989, level: "intermediate"},
  {id: 5, title: "React Basics", lessons: 21, enrolled: 1538, level: "advanced"},
  {id: 6, title: "Intro to SQL", lessons: 47, enrolled: 2938, level: "beginner"},
  {id: 7, title: "Web Security", lessons: 21, enrolled: 1684, level: "intermediate"},
  {id: 8, title: "Testing JS", lessons: 20, enrolled: 324, level: "advanced"}
]
```

Type the parameters and the return value. The interface is already written for you.
