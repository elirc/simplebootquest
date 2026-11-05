---
slug: "js-data-courses-above"
title: "Data: Courses with a lesson count above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Courses with a lesson count above a limit

Return the title of every course whose `lessons` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Accessibility", lessons: 47, enrolled: 3984, level: "advanced"},
  {id: 2, title: "Node APIs", lessons: 17, enrolled: 1209, level: "advanced"},
  {id: 3, title: "Docker Intro", lessons: 41, enrolled: 1614, level: "beginner"},
  {id: 4, title: "CSS Layouts", lessons: 25, enrolled: 788, level: "intermediate"},
  {id: 5, title: "React Basics", lessons: 20, enrolled: 3431, level: "intermediate"},
  {id: 6, title: "TypeScript 101", lessons: 29, enrolled: 4184, level: "intermediate"},
  {id: 7, title: "Web Security", lessons: 11, enrolled: 2079, level: "advanced"},
  {id: 8, title: "Data Viz", lessons: 40, enrolled: 2708, level: "intermediate"}
]
```
