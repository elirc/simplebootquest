---
slug: "debug-employees-sum"
title: "Debug: Total salary of all employees"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total salary of all employees

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `salary` across all employees. An empty list totals 0.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Tim", salary: 100008, yearsAtCompany: 12, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Katherine", salary: 134237, yearsAtCompany: 4, team: "data", level: "junior", remote: false},
  {id: 3, name: "Barbara", salary: 63281, yearsAtCompany: 13, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Margaret", salary: 108501, yearsAtCompany: 13, team: "product", level: "senior", remote: true},
  {id: 5, name: "Radia", salary: 70606, yearsAtCompany: 14, team: "data", level: "senior", remote: false},
  {id: 6, name: "Alan", salary: 134920, yearsAtCompany: 3, team: "product", level: "mid", remote: true},
  {id: 7, name: "Ken", salary: 125891, yearsAtCompany: 4, team: "platform", level: "mid", remote: true},
  {id: 8, name: "Grace", salary: 48043, yearsAtCompany: 5, team: "data", level: "junior", remote: true}
]
```
