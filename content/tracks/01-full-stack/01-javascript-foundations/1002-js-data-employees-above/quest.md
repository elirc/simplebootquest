---
slug: "js-data-employees-above"
title: "Data: Employees with a salary above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Employees with a salary above a limit

Return the name of every employee whose `salary` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 44612, yearsAtCompany: 11, team: "data", level: "junior", remote: true},
  {id: 2, name: "Frances", salary: 149875, yearsAtCompany: 13, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Barbara", salary: 103005, yearsAtCompany: 11, team: "platform", level: "mid", remote: true},
  {id: 4, name: "Ken", salary: 71582, yearsAtCompany: 3, team: "product", level: "junior", remote: true},
  {id: 5, name: "Radia", salary: 113200, yearsAtCompany: 3, team: "product", level: "junior", remote: true},
  {id: 6, name: "Linus", salary: 132323, yearsAtCompany: 10, team: "data", level: "mid", remote: true},
  {id: 7, name: "Tim", salary: 87017, yearsAtCompany: 1, team: "data", level: "senior", remote: false},
  {id: 8, name: "Margaret", salary: 118552, yearsAtCompany: 13, team: "platform", level: "mid", remote: true}
]
```
