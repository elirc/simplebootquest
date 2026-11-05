---
slug: "js-data-employees-format"
title: "Data: Format employees as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format employees as labels

Return one string per employee: `"<name> (<salary>)"`, e.g. `"Margaret (142313)"`.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 142313, yearsAtCompany: 11, team: "data", level: "senior", remote: false},
  {id: 2, name: "Tim", salary: 90356, yearsAtCompany: 5, team: "product", level: "mid", remote: true},
  {id: 3, name: "Radia", salary: 125549, yearsAtCompany: 8, team: "data", level: "mid", remote: false},
  {id: 4, name: "Ada", salary: 138289, yearsAtCompany: 12, team: "data", level: "junior", remote: false},
  {id: 5, name: "Ken", salary: 150364, yearsAtCompany: 8, team: "platform", level: "senior", remote: false},
  {id: 6, name: "Katherine", salary: 68390, yearsAtCompany: 13, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Dennis", salary: 69295, yearsAtCompany: 2, team: "data", level: "senior", remote: false},
  {id: 8, name: "Alan", salary: 124135, yearsAtCompany: 10, team: "product", level: "mid", remote: false}
]
```
