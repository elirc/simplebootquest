---
slug: "ts-data-employees-sum"
title: "Data: Total salary of all employees"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total salary of all employees

Return the sum of `salary` across all employees. An empty list totals 0.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 91604, yearsAtCompany: 12, team: "product", level: "junior", remote: false},
  {id: 2, name: "Tim", salary: 43452, yearsAtCompany: 8, team: "data", level: "mid", remote: true},
  {id: 3, name: "Frances", salary: 79487, yearsAtCompany: 14, team: "data", level: "junior", remote: true},
  {id: 4, name: "Ken", salary: 137876, yearsAtCompany: 11, team: "platform", level: "mid", remote: false},
  {id: 5, name: "Radia", salary: 108120, yearsAtCompany: 13, team: "product", level: "junior", remote: true},
  {id: 6, name: "Ada", salary: 114194, yearsAtCompany: 5, team: "data", level: "senior", remote: true},
  {id: 7, name: "Alan", salary: 91546, yearsAtCompany: 8, team: "platform", level: "junior", remote: false},
  {id: 8, name: "Linus", salary: 135207, yearsAtCompany: 9, team: "platform", level: "senior", remote: true}
]
```

Type the parameters and the return value. The interface is already written for you.
