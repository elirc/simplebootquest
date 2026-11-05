---
slug: "js-data-employees-update"
title: "Data: Update employees immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update employees immutably

Return a **new** array where every employee with `level` equal to `value` has `salary` increased by `amount`. Other employees are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 91194, yearsAtCompany: 12, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Radia", salary: 54826, yearsAtCompany: 9, team: "product", level: "senior", remote: false},
  {id: 3, name: "Barbara", salary: 45551, yearsAtCompany: 11, team: "product", level: "junior", remote: true},
  {id: 4, name: "Margaret", salary: 59320, yearsAtCompany: 3, team: "data", level: "mid", remote: true},
  {id: 5, name: "Dennis", salary: 124789, yearsAtCompany: 13, team: "data", level: "mid", remote: false},
  {id: 6, name: "Alan", salary: 75465, yearsAtCompany: 3, team: "product", level: "senior", remote: true},
  {id: 7, name: "Linus", salary: 55948, yearsAtCompany: 6, team: "platform", level: "mid", remote: false},
  {id: 8, name: "Ken", salary: 158925, yearsAtCompany: 13, team: "platform", level: "junior", remote: false}
]
```
