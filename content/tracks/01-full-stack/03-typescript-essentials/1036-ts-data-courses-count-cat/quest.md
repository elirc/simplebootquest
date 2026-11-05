---
slug: "ts-data-courses-count-cat"
title: "Data: Count courses by level"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count courses by level

Return how many courses have `level` equal to `value`.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 28, enrolled: 4275, level: "intermediate"},
  {id: 2, title: "GraphQL", lessons: 6, enrolled: 1370, level: "intermediate"},
  {id: 3, title: "Git Essentials", lessons: 20, enrolled: 4611, level: "beginner"},
  {id: 4, title: "Node APIs", lessons: 25, enrolled: 1894, level: "beginner"},
  {id: 5, title: "Data Viz", lessons: 25, enrolled: 489, level: "advanced"},
  {id: 6, title: "React Basics", lessons: 33, enrolled: 2588, level: "intermediate"},
  {id: 7, title: "Web Security", lessons: 30, enrolled: 3682, level: "beginner"},
  {id: 8, title: "Accessibility", lessons: 19, enrolled: 1478, level: "intermediate"}
]
```

Type the parameters and the return value. The interface is already written for you.
