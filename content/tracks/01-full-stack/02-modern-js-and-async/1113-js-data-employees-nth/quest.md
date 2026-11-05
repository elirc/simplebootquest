---
slug: "js-data-employees-nth"
title: "Data: The n-th employee by salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th employee by salary

Return the name of the employee ranked `n` (1 = highest `salary`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 107767, yearsAtCompany: 10, team: "product", level: "mid", remote: false},
  {id: 2, name: "Frances", salary: 69466, yearsAtCompany: 4, team: "product", level: "senior", remote: true},
  {id: 3, name: "Barbara", salary: 47872, yearsAtCompany: 1, team: "data", level: "mid", remote: false},
  {id: 4, name: "Ken", salary: 55787, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 5, name: "Katherine", salary: 94146, yearsAtCompany: 2, team: "product", level: "junior", remote: false},
  {id: 6, name: "Grace", salary: 63076, yearsAtCompany: 2, team: "data", level: "mid", remote: false},
  {id: 7, name: "Dennis", salary: 57898, yearsAtCompany: 4, team: "platform", level: "senior", remote: true},
  {id: 8, name: "Radia", salary: 95034, yearsAtCompany: 8, team: "data", level: "mid", remote: true}
]
```
