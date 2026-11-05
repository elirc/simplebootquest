---
slug: "js-data-courses-histogram"
title: "Data: Bucket courses by lesson count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket courses by lesson count

Group courses into buckets of width `width` by `lessons`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 29, enrolled: 2177, level: "advanced"},
  {id: 2, title: "TypeScript 101", lessons: 13, enrolled: 3642, level: "intermediate"},
  {id: 3, title: "Accessibility", lessons: 43, enrolled: 722, level: "intermediate"},
  {id: 4, title: "GraphQL", lessons: 44, enrolled: 2266, level: "intermediate"},
  {id: 5, title: "Testing JS", lessons: 21, enrolled: 3984, level: "beginner"},
  {id: 6, title: "Node APIs", lessons: 32, enrolled: 2428, level: "advanced"},
  {id: 7, title: "Git Essentials", lessons: 7, enrolled: 4633, level: "beginner"},
  {id: 8, title: "Data Viz", lessons: 7, enrolled: 4292, level: "intermediate"}
]
```
