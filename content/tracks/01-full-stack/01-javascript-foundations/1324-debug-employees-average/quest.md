---
slug: "debug-employees-average"
title: "Debug: Average years at the company"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average years at the company

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `yearsAtCompany` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 107988, yearsAtCompany: 2, team: "product", level: "senior", remote: false},
  {id: 2, name: "Katherine", salary: 46005, yearsAtCompany: 11, team: "product", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 43061, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 4, name: "Alan", salary: 127854, yearsAtCompany: 7, team: "platform", level: "senior", remote: true},
  {id: 5, name: "Barbara", salary: 60149, yearsAtCompany: 10, team: "data", level: "senior", remote: true},
  {id: 6, name: "Linus", salary: 84817, yearsAtCompany: 3, team: "data", level: "senior", remote: false},
  {id: 7, name: "Tim", salary: 113635, yearsAtCompany: 15, team: "platform", level: "junior", remote: false},
  {id: 8, name: "Dennis", salary: 47682, yearsAtCompany: 5, team: "product", level: "senior", remote: true}
]
```
