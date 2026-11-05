---
slug: "js-data-employees-sum"
title: "Data: Total years at the company of all employees"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total years at the company of all employees

Return the sum of `yearsAtCompany` across all employees. An empty list totals 0.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Dennis", salary: 76336, yearsAtCompany: 13, team: "data", level: "junior", remote: false},
  {id: 2, name: "Ada", salary: 96053, yearsAtCompany: 0, team: "platform", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 133048, yearsAtCompany: 9, team: "product", level: "senior", remote: false},
  {id: 4, name: "Barbara", salary: 92189, yearsAtCompany: 4, team: "platform", level: "mid", remote: false},
  {id: 5, name: "Frances", salary: 81690, yearsAtCompany: 12, team: "data", level: "mid", remote: true},
  {id: 6, name: "Tim", salary: 72869, yearsAtCompany: 12, team: "data", level: "junior", remote: false},
  {id: 7, name: "Linus", salary: 123307, yearsAtCompany: 10, team: "product", level: "mid", remote: false},
  {id: 8, name: "Ken", salary: 55039, yearsAtCompany: 6, team: "data", level: "mid", remote: false}
]
```
