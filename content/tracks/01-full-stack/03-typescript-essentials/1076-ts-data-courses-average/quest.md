---
slug: "ts-data-courses-average"
title: "Data: Average enrolments"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average enrolments

Return the average `enrolled` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Web Security", lessons: 12, enrolled: 3744, level: "intermediate"},
  {id: 2, title: "Data Viz", lessons: 39, enrolled: 1153, level: "beginner"},
  {id: 3, title: "Accessibility", lessons: 47, enrolled: 4388, level: "advanced"},
  {id: 4, title: "Git Essentials", lessons: 8, enrolled: 1024, level: "intermediate"},
  {id: 5, title: "Docker Intro", lessons: 47, enrolled: 2896, level: "advanced"},
  {id: 6, title: "Intro to SQL", lessons: 14, enrolled: 3664, level: "advanced"},
  {id: 7, title: "Node APIs", lessons: 46, enrolled: 279, level: "advanced"},
  {id: 8, title: "CSS Layouts", lessons: 28, enrolled: 2065, level: "beginner"}
]
```

Type the parameters and the return value. The interface is already written for you.
