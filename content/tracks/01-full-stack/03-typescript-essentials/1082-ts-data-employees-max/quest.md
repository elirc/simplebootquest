---
slug: "ts-data-employees-max"
title: "Data: The employee with the highest salary"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The employee with the highest salary

Return the name of the employee with the **highest** `salary`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Grace", salary: 99319, yearsAtCompany: 13, team: "data", level: "junior", remote: false},
  {id: 2, name: "Dennis", salary: 92970, yearsAtCompany: 5, team: "platform", level: "senior", remote: false},
  {id: 3, name: "Katherine", salary: 67553, yearsAtCompany: 4, team: "platform", level: "senior", remote: true},
  {id: 4, name: "Margaret", salary: 132912, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 5, name: "Ada", salary: 121827, yearsAtCompany: 13, team: "product", level: "senior", remote: true},
  {id: 6, name: "Tim", salary: 57578, yearsAtCompany: 1, team: "product", level: "mid", remote: false},
  {id: 7, name: "Alan", salary: 59401, yearsAtCompany: 7, team: "platform", level: "junior", remote: true},
  {id: 8, name: "Frances", salary: 132271, yearsAtCompany: 2, team: "data", level: "senior", remote: true}
]
```

Type the parameters and the return value. The interface is already written for you.
