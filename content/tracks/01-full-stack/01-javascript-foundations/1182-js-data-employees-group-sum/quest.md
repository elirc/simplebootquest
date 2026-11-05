---
slug: "js-data-employees-group-sum"
title: "Data: Total salary per level"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total salary per level

Return an object mapping each `level` to the **sum** of `salary` for employees in it.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Radia", salary: 94142, yearsAtCompany: 14, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Frances", salary: 50551, yearsAtCompany: 11, team: "product", level: "mid", remote: true},
  {id: 3, name: "Dennis", salary: 83410, yearsAtCompany: 0, team: "platform", level: "junior", remote: false},
  {id: 4, name: "Katherine", salary: 58172, yearsAtCompany: 3, team: "product", level: "mid", remote: false},
  {id: 5, name: "Ken", salary: 128300, yearsAtCompany: 14, team: "platform", level: "mid", remote: true},
  {id: 6, name: "Linus", salary: 98184, yearsAtCompany: 7, team: "product", level: "junior", remote: true},
  {id: 7, name: "Alan", salary: 155096, yearsAtCompany: 1, team: "product", level: "senior", remote: true},
  {id: 8, name: "Grace", salary: 81059, yearsAtCompany: 13, team: "data", level: "senior", remote: true}
]
```
