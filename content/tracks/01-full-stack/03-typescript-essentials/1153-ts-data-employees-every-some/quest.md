---
slug: "ts-data-employees-every-some"
title: "Data: Are all employees under a years at the company limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all employees under a years at the company limit?

Return `true` if **every** employee has `yearsAtCompany` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 99379, yearsAtCompany: 0, team: "data", level: "mid", remote: true},
  {id: 2, name: "Ada", salary: 55635, yearsAtCompany: 9, team: "data", level: "junior", remote: true},
  {id: 3, name: "Linus", salary: 78759, yearsAtCompany: 9, team: "platform", level: "junior", remote: false},
  {id: 4, name: "Radia", salary: 87830, yearsAtCompany: 3, team: "platform", level: "junior", remote: false},
  {id: 5, name: "Barbara", salary: 116161, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Grace", salary: 156105, yearsAtCompany: 12, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Frances", salary: 137958, yearsAtCompany: 3, team: "data", level: "mid", remote: true},
  {id: 8, name: "Dennis", salary: 152206, yearsAtCompany: 15, team: "product", level: "junior", remote: true}
]
```

Type the parameters and the return value. The interface is already written for you.
