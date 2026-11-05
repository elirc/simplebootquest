---
slug: "js-data-employees-index"
title: "Data: Index employees by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index employees by id

Return an object mapping each `id` to the employee's name, for fast lookups.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Radia", salary: 122434, yearsAtCompany: 7, team: "data", level: "senior", remote: true},
  {id: 2, name: "Linus", salary: 44879, yearsAtCompany: 6, team: "product", level: "mid", remote: true},
  {id: 3, name: "Tim", salary: 85276, yearsAtCompany: 12, team: "data", level: "senior", remote: false},
  {id: 4, name: "Dennis", salary: 81795, yearsAtCompany: 1, team: "product", level: "junior", remote: false},
  {id: 5, name: "Ken", salary: 95768, yearsAtCompany: 14, team: "data", level: "mid", remote: false},
  {id: 6, name: "Ada", salary: 48786, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 7, name: "Alan", salary: 84951, yearsAtCompany: 4, team: "product", level: "junior", remote: true},
  {id: 8, name: "Frances", salary: 100018, yearsAtCompany: 8, team: "platform", level: "senior", remote: true}
]
```
