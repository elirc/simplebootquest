---
slug: "js-data-courses-avg-per"
title: "Data: Average enrolments per level"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average enrolments per level

Return an object mapping each `level` to the average `enrolled` of its courses, rounded to a whole number.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Data Viz", lessons: 38, enrolled: 1504, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 48, enrolled: 461, level: "beginner"},
  {id: 3, title: "Accessibility", lessons: 26, enrolled: 118, level: "intermediate"},
  {id: 4, title: "React Basics", lessons: 18, enrolled: 1077, level: "beginner"},
  {id: 5, title: "CSS Layouts", lessons: 7, enrolled: 2919, level: "beginner"},
  {id: 6, title: "Git Essentials", lessons: 6, enrolled: 1447, level: "advanced"},
  {id: 7, title: "Node APIs", lessons: 35, enrolled: 4305, level: "intermediate"},
  {id: 8, title: "Intro to SQL", lessons: 36, enrolled: 3472, level: "intermediate"}
]
```
