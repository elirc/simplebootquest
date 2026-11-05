---
slug: "js-data-employees-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `salary` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 154568, yearsAtCompany: 4, team: "data", level: "mid", remote: false},
  {id: 2, name: "Grace", salary: 158371, yearsAtCompany: 2, team: "platform", level: "mid", remote: true},
  {id: 3, name: "Linus", salary: 98273, yearsAtCompany: 10, team: "data", level: "mid", remote: true},
  {id: 4, name: "Barbara", salary: 155814, yearsAtCompany: 14, team: "product", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 155696, yearsAtCompany: 2, team: "platform", level: "junior", remote: true},
  {id: 6, name: "Tim", salary: 151730, yearsAtCompany: 1, team: "product", level: "junior", remote: true},
  {id: 7, name: "Frances", salary: 58477, yearsAtCompany: 3, team: "data", level: "mid", remote: true},
  {id: 8, name: "Margaret", salary: 46961, yearsAtCompany: 5, team: "product", level: "mid", remote: true}
]
```
