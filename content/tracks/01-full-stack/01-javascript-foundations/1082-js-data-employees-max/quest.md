---
slug: "js-data-employees-max"
title: "Data: The employee with the highest salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The employee with the highest salary

Return the name of the employee with the **highest** `salary`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 60394, yearsAtCompany: 2, team: "product", level: "senior", remote: true},
  {id: 2, name: "Dennis", salary: 46708, yearsAtCompany: 2, team: "data", level: "mid", remote: true},
  {id: 3, name: "Grace", salary: 115674, yearsAtCompany: 14, team: "product", level: "mid", remote: true},
  {id: 4, name: "Ken", salary: 94802, yearsAtCompany: 9, team: "data", level: "senior", remote: true},
  {id: 5, name: "Katherine", salary: 143594, yearsAtCompany: 12, team: "product", level: "mid", remote: true},
  {id: 6, name: "Linus", salary: 87093, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 7, name: "Radia", salary: 42333, yearsAtCompany: 5, team: "product", level: "senior", remote: false},
  {id: 8, name: "Alan", salary: 110809, yearsAtCompany: 4, team: "data", level: "mid", remote: true}
]
```
