---
slug: "js-data-employees-min"
title: "Data: The employee with the lowest salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The employee with the lowest salary

Return the name of the employee with the **lowest** `salary` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Radia", salary: 132796, yearsAtCompany: 12, team: "platform", level: "senior", remote: false},
  {id: 2, name: "Linus", salary: 72387, yearsAtCompany: 11, team: "data", level: "junior", remote: true},
  {id: 3, name: "Katherine", salary: 64552, yearsAtCompany: 14, team: "data", level: "senior", remote: true},
  {id: 4, name: "Ada", salary: 114272, yearsAtCompany: 6, team: "platform", level: "junior", remote: false},
  {id: 5, name: "Margaret", salary: 133686, yearsAtCompany: 7, team: "platform", level: "junior", remote: true},
  {id: 6, name: "Dennis", salary: 82275, yearsAtCompany: 8, team: "platform", level: "junior", remote: false},
  {id: 7, name: "Frances", salary: 154838, yearsAtCompany: 5, team: "data", level: "senior", remote: true},
  {id: 8, name: "Tim", salary: 88243, yearsAtCompany: 3, team: "platform", level: "senior", remote: false}
]
```
