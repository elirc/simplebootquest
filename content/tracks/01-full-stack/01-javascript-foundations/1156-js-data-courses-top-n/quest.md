---
slug: "js-data-courses-top-n"
title: "Data: Top courses by enrolments"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top courses by enrolments

Return the titles of the `n` courses with the **highest** `enrolled`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Data Viz", lessons: 42, enrolled: 4619, level: "intermediate"},
  {id: 2, title: "Docker Intro", lessons: 14, enrolled: 3273, level: "beginner"},
  {id: 3, title: "Testing JS", lessons: 10, enrolled: 501, level: "intermediate"},
  {id: 4, title: "React Basics", lessons: 26, enrolled: 3412, level: "intermediate"},
  {id: 5, title: "Node APIs", lessons: 47, enrolled: 4079, level: "advanced"},
  {id: 6, title: "Intro to SQL", lessons: 19, enrolled: 1418, level: "beginner"},
  {id: 7, title: "Web Security", lessons: 20, enrolled: 2346, level: "advanced"},
  {id: 8, title: "CSS Layouts", lessons: 16, enrolled: 275, level: "advanced"}
]
```
