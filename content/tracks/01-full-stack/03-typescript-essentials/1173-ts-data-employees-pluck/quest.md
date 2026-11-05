---
slug: "ts-data-employees-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `salary` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Ken", salary: 114856, yearsAtCompany: 6, team: "product", level: "mid", remote: true},
  {id: 2, name: "Barbara", salary: 48015, yearsAtCompany: 2, team: "platform", level: "senior", remote: false},
  {id: 3, name: "Frances", salary: 43616, yearsAtCompany: 4, team: "platform", level: "junior", remote: true},
  {id: 4, name: "Grace", salary: 118463, yearsAtCompany: 9, team: "product", level: "junior", remote: false},
  {id: 5, name: "Dennis", salary: 149765, yearsAtCompany: 13, team: "data", level: "senior", remote: false},
  {id: 6, name: "Alan", salary: 108234, yearsAtCompany: 6, team: "data", level: "senior", remote: false},
  {id: 7, name: "Linus", salary: 80290, yearsAtCompany: 9, team: "product", level: "senior", remote: false},
  {id: 8, name: "Tim", salary: 96280, yearsAtCompany: 1, team: "product", level: "senior", remote: true}
]
```

Type the parameters and the return value. The interface is already written for you.
