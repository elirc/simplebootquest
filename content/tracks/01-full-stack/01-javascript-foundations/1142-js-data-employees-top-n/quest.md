---
slug: "js-data-employees-top-n"
title: "Data: Top employees by salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top employees by salary

Return the names of the `n` employees with the **highest** `salary`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 145820, yearsAtCompany: 13, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Frances", salary: 67761, yearsAtCompany: 10, team: "product", level: "senior", remote: false},
  {id: 3, name: "Alan", salary: 126304, yearsAtCompany: 14, team: "platform", level: "senior", remote: true},
  {id: 4, name: "Ada", salary: 101198, yearsAtCompany: 7, team: "data", level: "senior", remote: false},
  {id: 5, name: "Tim", salary: 109799, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 6, name: "Grace", salary: 73389, yearsAtCompany: 12, team: "platform", level: "junior", remote: true},
  {id: 7, name: "Ken", salary: 131163, yearsAtCompany: 6, team: "product", level: "senior", remote: true},
  {id: 8, name: "Radia", salary: 103104, yearsAtCompany: 13, team: "data", level: "senior", remote: true}
]
```
