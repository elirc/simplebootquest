---
slug: "ts-data-employees-count-cat"
title: "Data: Count employees by team"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count employees by team

Return how many employees have `team` equal to `value`.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Ken", salary: 153411, yearsAtCompany: 9, team: "data", level: "mid", remote: false},
  {id: 2, name: "Katherine", salary: 69320, yearsAtCompany: 13, team: "platform", level: "senior", remote: false},
  {id: 3, name: "Ada", salary: 100866, yearsAtCompany: 3, team: "platform", level: "senior", remote: false},
  {id: 4, name: "Dennis", salary: 54124, yearsAtCompany: 10, team: "data", level: "junior", remote: true},
  {id: 5, name: "Linus", salary: 70162, yearsAtCompany: 4, team: "data", level: "senior", remote: false},
  {id: 6, name: "Margaret", salary: 73761, yearsAtCompany: 6, team: "product", level: "senior", remote: false},
  {id: 7, name: "Grace", salary: 83129, yearsAtCompany: 1, team: "product", level: "junior", remote: false},
  {id: 8, name: "Alan", salary: 140918, yearsAtCompany: 10, team: "platform", level: "mid", remote: true}
]
```

Type the parameters and the return value. The interface is already written for you.
