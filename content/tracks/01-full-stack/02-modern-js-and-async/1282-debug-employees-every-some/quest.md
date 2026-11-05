---
slug: "debug-employees-every-some"
title: "Debug: Are all employees under a years at the company limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all employees under a years at the company limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** employee has `yearsAtCompany` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Radia", salary: 48666, yearsAtCompany: 14, team: "product", level: "junior", remote: true},
  {id: 2, name: "Grace", salary: 83379, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 3, name: "Tim", salary: 154216, yearsAtCompany: 6, team: "platform", level: "senior", remote: false},
  {id: 4, name: "Ada", salary: 146192, yearsAtCompany: 11, team: "platform", level: "mid", remote: false},
  {id: 5, name: "Katherine", salary: 44990, yearsAtCompany: 6, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Alan", salary: 47940, yearsAtCompany: 5, team: "data", level: "senior", remote: true},
  {id: 7, name: "Dennis", salary: 77423, yearsAtCompany: 6, team: "data", level: "junior", remote: true},
  {id: 8, name: "Linus", salary: 124697, yearsAtCompany: 4, team: "product", level: "senior", remote: true}
]
```
