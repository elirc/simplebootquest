---
slug: "js-data-employees-percent"
title: "Data: What share of employees are remote?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of employees are remote?

Return the percentage (0–100, rounded to a whole number) of employees where `remote` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 93374, yearsAtCompany: 13, team: "data", level: "senior", remote: true},
  {id: 2, name: "Radia", salary: 75445, yearsAtCompany: 3, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Katherine", salary: 90090, yearsAtCompany: 9, team: "platform", level: "senior", remote: false},
  {id: 4, name: "Barbara", salary: 144911, yearsAtCompany: 4, team: "platform", level: "mid", remote: true},
  {id: 5, name: "Ada", salary: 106268, yearsAtCompany: 9, team: "product", level: "senior", remote: true},
  {id: 6, name: "Ken", salary: 105565, yearsAtCompany: 11, team: "data", level: "junior", remote: false},
  {id: 7, name: "Alan", salary: 122473, yearsAtCompany: 1, team: "platform", level: "senior", remote: true},
  {id: 8, name: "Frances", salary: 111213, yearsAtCompany: 7, team: "data", level: "mid", remote: true}
]
```
