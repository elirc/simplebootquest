---
slug: "js-data-courses-sum"
title: "Data: Total enrolments of all courses"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total enrolments of all courses

Return the sum of `enrolled` across all courses. An empty list totals 0.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Web Security", lessons: 38, enrolled: 1657, level: "intermediate"},
  {id: 2, title: "Intro to SQL", lessons: 32, enrolled: 981, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 17, enrolled: 3425, level: "intermediate"},
  {id: 4, title: "CSS Layouts", lessons: 46, enrolled: 2835, level: "beginner"},
  {id: 5, title: "Testing JS", lessons: 15, enrolled: 3105, level: "intermediate"},
  {id: 6, title: "Data Viz", lessons: 45, enrolled: 3769, level: "beginner"},
  {id: 7, title: "Node APIs", lessons: 44, enrolled: 2860, level: "intermediate"},
  {id: 8, title: "TypeScript 101", lessons: 35, enrolled: 679, level: "advanced"}
]
```
