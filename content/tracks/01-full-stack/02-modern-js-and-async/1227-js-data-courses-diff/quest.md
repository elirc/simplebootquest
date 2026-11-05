---
slug: "js-data-courses-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's courses (same ids), return the ids whose `lessons` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, title: "Git Essentials", lessons: 23, enrolled: 1297, level: "beginner"},
  {id: 2, title: "React Basics", lessons: 22, enrolled: 3375, level: "intermediate"},
  {id: 3, title: "Data Viz", lessons: 45, enrolled: 706, level: "beginner"},
  {id: 4, title: "CSS Layouts", lessons: 46, enrolled: 1139, level: "intermediate"},
  {id: 5, title: "Web Security", lessons: 43, enrolled: 1963, level: "beginner"},
  {id: 6, title: "TypeScript 101", lessons: 30, enrolled: 3496, level: "intermediate"},
  {id: 7, title: "Node APIs", lessons: 10, enrolled: 4444, level: "intermediate"},
  {id: 8, title: "Accessibility", lessons: 28, enrolled: 3793, level: "advanced"}
]
```
