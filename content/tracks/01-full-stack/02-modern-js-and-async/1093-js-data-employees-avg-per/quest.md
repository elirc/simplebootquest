---
slug: "js-data-employees-avg-per"
title: "Data: Average years at the company per level"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average years at the company per level

Return an object mapping each `level` to the average `yearsAtCompany` of its employees, rounded to a whole number.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 95896, yearsAtCompany: 2, team: "data", level: "senior", remote: false},
  {id: 2, name: "Barbara", salary: 85557, yearsAtCompany: 5, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Dennis", salary: 112542, yearsAtCompany: 9, team: "platform", level: "mid", remote: true},
  {id: 4, name: "Radia", salary: 43844, yearsAtCompany: 2, team: "data", level: "senior", remote: true},
  {id: 5, name: "Frances", salary: 104088, yearsAtCompany: 9, team: "product", level: "junior", remote: true},
  {id: 6, name: "Ken", salary: 122341, yearsAtCompany: 9, team: "platform", level: "senior", remote: false},
  {id: 7, name: "Grace", salary: 101700, yearsAtCompany: 13, team: "data", level: "mid", remote: false},
  {id: 8, name: "Margaret", salary: 105572, yearsAtCompany: 1, team: "platform", level: "senior", remote: false}
]
```
