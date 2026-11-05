---
slug: "debug-employees-search"
title: "Debug: Search employees by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Search employees by name

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes case-sensitivity. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 137059, yearsAtCompany: 5, team: "product", level: "senior", remote: true},
  {id: 2, name: "Ken", salary: 116867, yearsAtCompany: 10, team: "data", level: "senior", remote: true},
  {id: 3, name: "Alan", salary: 98784, yearsAtCompany: 3, team: "product", level: "senior", remote: true},
  {id: 4, name: "Katherine", salary: 126690, yearsAtCompany: 15, team: "platform", level: "junior", remote: true},
  {id: 5, name: "Barbara", salary: 125835, yearsAtCompany: 3, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Frances", salary: 120117, yearsAtCompany: 7, team: "product", level: "mid", remote: false},
  {id: 7, name: "Linus", salary: 45148, yearsAtCompany: 4, team: "data", level: "mid", remote: false},
  {id: 8, name: "Margaret", salary: 156508, yearsAtCompany: 12, team: "product", level: "mid", remote: true}
]
```
