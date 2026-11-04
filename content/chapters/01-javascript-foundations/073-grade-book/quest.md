---
slug: "js-grade-book"
title: "Real-World: Grade Book Report"
type: "code"
language: "js"
xp: 25
hints: ["Write small helpers first: `round1`, `gradeFor`.", "Sort with `b.average - a.average || a.name.localeCompare(b.name)`."]
---
# Real-World: Grade Book Report

A mini data-processing task that combines objects, arrays, sorting and rounding, much like the reports and dashboards you'll build.

Given students like `{ name: 'Ada', scores: [90, 85, 100] }`:

## Your task

Implement `report(students)`, which returns:

```js
{
  rows: [ { name, average, grade } ... ],  // sorted by average desc, then name A→Z
  classAverage: 84.5,                     // the average of the student averages
  top: 'Ada',                             // name of the top student (or null)
  distribution: { A: 1, B: 2, C: 0, D: 0, F: 1 },
}
```

- `average` is rounded to 1 decimal place. A student with no scores has an average of `0`.
- Grades: A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, otherwise F (based on the rounded average).
- `classAverage` is rounded to 1 decimal place, or `0` with no students.
