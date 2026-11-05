---
slug: "js-data-courses-lookup"
title: "Data: Look up a course's enrolments"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a course's enrolments

Return the `enrolled` of the course whose title is `title`, or `null` if there isn't one.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 25, enrolled: 835, level: "advanced"},
  {id: 2, title: "Git Essentials", lessons: 24, enrolled: 1883, level: "advanced"},
  {id: 3, title: "Intro to SQL", lessons: 7, enrolled: 790, level: "beginner"},
  {id: 4, title: "TypeScript 101", lessons: 39, enrolled: 2394, level: "beginner"},
  {id: 5, title: "GraphQL", lessons: 37, enrolled: 4683, level: "advanced"},
  {id: 6, title: "Web Security", lessons: 17, enrolled: 2125, level: "beginner"},
  {id: 7, title: "Data Viz", lessons: 18, enrolled: 1061, level: "beginner"},
  {id: 8, title: "Testing JS", lessons: 29, enrolled: 3187, level: "beginner"}
]
```
