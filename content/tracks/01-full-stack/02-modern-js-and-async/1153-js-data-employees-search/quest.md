---
slug: "js-data-employees-search"
title: "Data: Search employees by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search employees by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 100252, yearsAtCompany: 5, team: "data", level: "junior", remote: false},
  {id: 2, name: "Frances", salary: 155025, yearsAtCompany: 14, team: "data", level: "mid", remote: true},
  {id: 3, name: "Katherine", salary: 94965, yearsAtCompany: 7, team: "platform", level: "senior", remote: false},
  {id: 4, name: "Tim", salary: 104247, yearsAtCompany: 8, team: "product", level: "mid", remote: true},
  {id: 5, name: "Ken", salary: 82445, yearsAtCompany: 7, team: "platform", level: "senior", remote: true},
  {id: 6, name: "Ada", salary: 89644, yearsAtCompany: 7, team: "product", level: "junior", remote: true},
  {id: 7, name: "Grace", salary: 43255, yearsAtCompany: 0, team: "data", level: "mid", remote: false},
  {id: 8, name: "Radia", salary: 76910, yearsAtCompany: 3, team: "product", level: "junior", remote: false}
]
```
