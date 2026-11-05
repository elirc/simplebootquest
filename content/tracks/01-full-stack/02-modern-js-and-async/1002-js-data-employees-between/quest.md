---
slug: "js-data-employees-between"
title: "Data: Employees in a years at the company range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Employees in a years at the company range

Return the names of employees whose `yearsAtCompany` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Barbara", salary: 118731, yearsAtCompany: 14, team: "data", level: "senior", remote: true},
  {id: 2, name: "Ada", salary: 77581, yearsAtCompany: 7, team: "product", level: "senior", remote: false},
  {id: 3, name: "Radia", salary: 87793, yearsAtCompany: 3, team: "platform", level: "mid", remote: true},
  {id: 4, name: "Linus", salary: 50245, yearsAtCompany: 7, team: "data", level: "junior", remote: true},
  {id: 5, name: "Tim", salary: 47030, yearsAtCompany: 15, team: "product", level: "senior", remote: false},
  {id: 6, name: "Katherine", salary: 87995, yearsAtCompany: 9, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Ken", salary: 63834, yearsAtCompany: 1, team: "product", level: "mid", remote: true},
  {id: 8, name: "Dennis", salary: 122303, yearsAtCompany: 9, team: "platform", level: "junior", remote: false}
]
```
