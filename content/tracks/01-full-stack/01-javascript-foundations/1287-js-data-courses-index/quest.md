---
slug: "js-data-courses-index"
title: "Data: Index courses by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index courses by id

Return an object mapping each `id` to the course's title, for fast lookups.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "CSS Layouts", lessons: 15, enrolled: 59, level: "advanced"},
  {id: 2, title: "GraphQL", lessons: 28, enrolled: 125, level: "intermediate"},
  {id: 3, title: "Accessibility", lessons: 39, enrolled: 2348, level: "intermediate"},
  {id: 4, title: "React Basics", lessons: 34, enrolled: 4329, level: "intermediate"},
  {id: 5, title: "Intro to SQL", lessons: 45, enrolled: 1057, level: "advanced"},
  {id: 6, title: "Node APIs", lessons: 39, enrolled: 3445, level: "beginner"},
  {id: 7, title: "Docker Intro", lessons: 47, enrolled: 3437, level: "intermediate"},
  {id: 8, title: "Testing JS", lessons: 24, enrolled: 4026, level: "beginner"}
]
```
