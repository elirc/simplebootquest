---
slug: "js-data-employees-chain"
title: "Data: Filter, sort, map: employees in one team"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: employees in one team

Return the names of employees whose `team` equals `value`, sorted by `yearsAtCompany` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 129711, yearsAtCompany: 4, team: "platform", level: "senior", remote: true},
  {id: 2, name: "Ken", salary: 83597, yearsAtCompany: 15, team: "data", level: "senior", remote: false},
  {id: 3, name: "Dennis", salary: 81430, yearsAtCompany: 5, team: "product", level: "senior", remote: true},
  {id: 4, name: "Katherine", salary: 96653, yearsAtCompany: 10, team: "product", level: "senior", remote: false},
  {id: 5, name: "Grace", salary: 146403, yearsAtCompany: 1, team: "data", level: "senior", remote: true},
  {id: 6, name: "Alan", salary: 91877, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 7, name: "Linus", salary: 121375, yearsAtCompany: 1, team: "data", level: "senior", remote: false},
  {id: 8, name: "Frances", salary: 46679, yearsAtCompany: 1, team: "product", level: "mid", remote: true}
]
```
