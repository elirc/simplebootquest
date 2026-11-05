---
slug: "debug-employees-lookup"
title: "Debug: Look up a employee's salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a employee's salary

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `salary` of the employee whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Tim", salary: 157195, yearsAtCompany: 11, team: "product", level: "senior", remote: false},
  {id: 2, name: "Linus", salary: 98066, yearsAtCompany: 15, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Ken", salary: 102027, yearsAtCompany: 3, team: "data", level: "mid", remote: true},
  {id: 4, name: "Dennis", salary: 67581, yearsAtCompany: 13, team: "product", level: "junior", remote: false},
  {id: 5, name: "Frances", salary: 124713, yearsAtCompany: 8, team: "data", level: "mid", remote: true},
  {id: 6, name: "Grace", salary: 43453, yearsAtCompany: 6, team: "product", level: "senior", remote: false},
  {id: 7, name: "Ada", salary: 131167, yearsAtCompany: 8, team: "data", level: "mid", remote: true},
  {id: 8, name: "Margaret", salary: 135644, yearsAtCompany: 8, team: "data", level: "senior", remote: false}
]
```
