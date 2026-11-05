---
slug: "debug-employees-count-cat"
title: "Debug: Count employees by level"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count employees by level

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many employees have `level` equal to `value`.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 64390, yearsAtCompany: 1, team: "product", level: "junior", remote: true},
  {id: 2, name: "Katherine", salary: 158368, yearsAtCompany: 5, team: "data", level: "mid", remote: true},
  {id: 3, name: "Tim", salary: 127387, yearsAtCompany: 2, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Grace", salary: 78379, yearsAtCompany: 12, team: "product", level: "mid", remote: false},
  {id: 5, name: "Ada", salary: 105228, yearsAtCompany: 14, team: "data", level: "junior", remote: false},
  {id: 6, name: "Ken", salary: 45104, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 7, name: "Barbara", salary: 123976, yearsAtCompany: 14, team: "product", level: "senior", remote: true},
  {id: 8, name: "Linus", salary: 84318, yearsAtCompany: 2, team: "data", level: "junior", remote: false}
]
```
