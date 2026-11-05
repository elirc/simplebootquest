---
slug: "debug-employees-nth"
title: "Debug: The n-th employee by salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The n-th employee by salary

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the name of the employee ranked `n` (1 = highest `salary`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 58151, yearsAtCompany: 4, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Grace", salary: 85606, yearsAtCompany: 7, team: "platform", level: "senior", remote: false},
  {id: 3, name: "Radia", salary: 130927, yearsAtCompany: 7, team: "data", level: "senior", remote: true},
  {id: 4, name: "Alan", salary: 57219, yearsAtCompany: 6, team: "platform", level: "junior", remote: false},
  {id: 5, name: "Linus", salary: 143300, yearsAtCompany: 10, team: "data", level: "mid", remote: true},
  {id: 6, name: "Katherine", salary: 154345, yearsAtCompany: 12, team: "data", level: "junior", remote: true},
  {id: 7, name: "Frances", salary: 154639, yearsAtCompany: 3, team: "platform", level: "junior", remote: true},
  {id: 8, name: "Barbara", salary: 93911, yearsAtCompany: 13, team: "product", level: "mid", remote: false}
]
```
