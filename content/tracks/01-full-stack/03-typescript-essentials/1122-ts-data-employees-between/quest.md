---
slug: "ts-data-employees-between"
title: "Data: Employees in a salary range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Employees in a salary range

Return the names of employees whose `salary` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 133899, yearsAtCompany: 8, team: "platform", level: "senior", remote: false},
  {id: 2, name: "Dennis", salary: 85096, yearsAtCompany: 9, team: "data", level: "senior", remote: false},
  {id: 3, name: "Tim", salary: 61285, yearsAtCompany: 6, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Katherine", salary: 64281, yearsAtCompany: 8, team: "product", level: "mid", remote: true},
  {id: 5, name: "Alan", salary: 131843, yearsAtCompany: 6, team: "data", level: "senior", remote: false},
  {id: 6, name: "Frances", salary: 143410, yearsAtCompany: 10, team: "platform", level: "mid", remote: false},
  {id: 7, name: "Margaret", salary: 91499, yearsAtCompany: 13, team: "product", level: "senior", remote: false},
  {id: 8, name: "Radia", salary: 110023, yearsAtCompany: 13, team: "product", level: "senior", remote: false}
]
```

Type the parameters and the return value. The interface is already written for you.
