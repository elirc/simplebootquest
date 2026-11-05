---
slug: "js-data-courses-min"
title: "Data: The course with the lowest enrolments"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The course with the lowest enrolments

Return the title of the course with the **lowest** `enrolled` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Intro to SQL", lessons: 13, enrolled: 3693, level: "advanced"},
  {id: 2, title: "Node APIs", lessons: 17, enrolled: 1242, level: "intermediate"},
  {id: 3, title: "Web Security", lessons: 34, enrolled: 2373, level: "advanced"},
  {id: 4, title: "TypeScript 101", lessons: 34, enrolled: 2772, level: "advanced"},
  {id: 5, title: "Testing JS", lessons: 6, enrolled: 1519, level: "beginner"},
  {id: 6, title: "Accessibility", lessons: 28, enrolled: 2218, level: "beginner"},
  {id: 7, title: "Docker Intro", lessons: 33, enrolled: 1310, level: "intermediate"},
  {id: 8, title: "GraphQL", lessons: 34, enrolled: 2205, level: "beginner"}
]
```
