---
slug: "ts-data-courses-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `enrolled` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Intro to SQL", lessons: 17, enrolled: 4081, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 19, enrolled: 4332, level: "beginner"},
  {id: 3, title: "Accessibility", lessons: 37, enrolled: 1313, level: "beginner"},
  {id: 4, title: "Git Essentials", lessons: 46, enrolled: 430, level: "beginner"},
  {id: 5, title: "Web Security", lessons: 10, enrolled: 490, level: "intermediate"},
  {id: 6, title: "TypeScript 101", lessons: 28, enrolled: 3771, level: "intermediate"},
  {id: 7, title: "Node APIs", lessons: 30, enrolled: 3797, level: "intermediate"},
  {id: 8, title: "React Basics", lessons: 21, enrolled: 2539, level: "advanced"}
]
```

Type the parameters and the return value. The interface is already written for you.
