---
slug: "debug-employees-sort-asc"
title: "Debug: Sort employees by salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort employees by salary

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names sorted by `salary` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Grace", salary: 121231, yearsAtCompany: 9, team: "platform", level: "senior", remote: true},
  {id: 2, name: "Dennis", salary: 52231, yearsAtCompany: 3, team: "data", level: "senior", remote: true},
  {id: 3, name: "Alan", salary: 78482, yearsAtCompany: 15, team: "product", level: "junior", remote: false},
  {id: 4, name: "Margaret", salary: 144284, yearsAtCompany: 10, team: "product", level: "mid", remote: true},
  {id: 5, name: "Linus", salary: 147823, yearsAtCompany: 14, team: "data", level: "mid", remote: true},
  {id: 6, name: "Frances", salary: 68553, yearsAtCompany: 8, team: "platform", level: "senior", remote: false},
  {id: 7, name: "Barbara", salary: 103640, yearsAtCompany: 4, team: "product", level: "mid", remote: true},
  {id: 8, name: "Tim", salary: 55731, yearsAtCompany: 7, team: "platform", level: "junior", remote: true}
]
```
