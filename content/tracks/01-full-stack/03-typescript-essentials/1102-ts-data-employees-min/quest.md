---
slug: "ts-data-employees-min"
title: "Data: The employee with the lowest salary"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The employee with the lowest salary

Return the name of the employee with the **lowest** `salary` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 109513, yearsAtCompany: 11, team: "data", level: "mid", remote: false},
  {id: 2, name: "Tim", salary: 138232, yearsAtCompany: 6, team: "platform", level: "mid", remote: true},
  {id: 3, name: "Linus", salary: 119841, yearsAtCompany: 5, team: "product", level: "junior", remote: false},
  {id: 4, name: "Alan", salary: 139352, yearsAtCompany: 9, team: "data", level: "mid", remote: false},
  {id: 5, name: "Ken", salary: 149914, yearsAtCompany: 13, team: "product", level: "mid", remote: true},
  {id: 6, name: "Barbara", salary: 152008, yearsAtCompany: 6, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Grace", salary: 120933, yearsAtCompany: 4, team: "platform", level: "senior", remote: true},
  {id: 8, name: "Frances", salary: 74342, yearsAtCompany: 4, team: "data", level: "junior", remote: false}
]
```

Type the parameters and the return value. The interface is already written for you.
