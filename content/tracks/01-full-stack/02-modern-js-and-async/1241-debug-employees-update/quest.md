---
slug: "debug-employees-update"
title: "Debug: Update employees immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Update employees immutably

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return a **new** array where every employee with `team` equal to `value` has `salary` increased by `amount`. Other employees are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Grace", salary: 96965, yearsAtCompany: 1, team: "platform", level: "mid", remote: false},
  {id: 2, name: "Radia", salary: 44711, yearsAtCompany: 13, team: "platform", level: "junior", remote: true},
  {id: 3, name: "Ken", salary: 151009, yearsAtCompany: 7, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Alan", salary: 123188, yearsAtCompany: 14, team: "product", level: "junior", remote: false},
  {id: 5, name: "Ada", salary: 123197, yearsAtCompany: 6, team: "product", level: "senior", remote: true},
  {id: 6, name: "Tim", salary: 44457, yearsAtCompany: 4, team: "product", level: "senior", remote: false},
  {id: 7, name: "Barbara", salary: 120161, yearsAtCompany: 10, team: "platform", level: "mid", remote: true},
  {id: 8, name: "Dennis", salary: 42601, yearsAtCompany: 7, team: "platform", level: "junior", remote: true}
]
```
