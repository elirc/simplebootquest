---
slug: "js-data-students-histogram"
title: "Data: Bucket students by age"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket students by age

Group students into buckets of width `width` by `age`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Chen", score: 43, age: 18, course: "design", graduated: true},
  {id: 2, name: "Bilal", score: 79, age: 17, course: "data", graduated: false},
  {id: 3, name: "Ines", score: 84, age: 25, course: "design", graduated: false},
  {id: 4, name: "Jonah", score: 83, age: 30, course: "web", graduated: false},
  {id: 5, name: "Elif", score: 63, age: 25, course: "data", graduated: true},
  {id: 6, name: "Luca", score: 38, age: 29, course: "web", graduated: true},
  {id: 7, name: "Amara", score: 69, age: 29, course: "data", graduated: false},
  {id: 8, name: "Dara", score: 94, age: 31, course: "data", graduated: false}
]
```
