---
slug: "js-data-employees-every-some"
title: "Data: Are all employees under a salary limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all employees under a salary limit?

Return `true` if **every** employee has `salary` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Dennis", salary: 47101, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 2, name: "Ken", salary: 47940, yearsAtCompany: 2, team: "platform", level: "junior", remote: false},
  {id: 3, name: "Linus", salary: 84964, yearsAtCompany: 5, team: "platform", level: "senior", remote: true},
  {id: 4, name: "Ada", salary: 146346, yearsAtCompany: 4, team: "data", level: "mid", remote: false},
  {id: 5, name: "Barbara", salary: 64168, yearsAtCompany: 7, team: "product", level: "mid", remote: true},
  {id: 6, name: "Katherine", salary: 47506, yearsAtCompany: 1, team: "platform", level: "junior", remote: false},
  {id: 7, name: "Radia", salary: 87880, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 8, name: "Grace", salary: 144840, yearsAtCompany: 3, team: "platform", level: "junior", remote: false}
]
```
