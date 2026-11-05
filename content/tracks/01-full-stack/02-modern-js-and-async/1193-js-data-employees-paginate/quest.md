---
slug: "js-data-employees-paginate"
title: "Data: Paginate employees"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate employees

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Barbara", salary: 82917, yearsAtCompany: 4, team: "data", level: "senior", remote: false},
  {id: 2, name: "Alan", salary: 57596, yearsAtCompany: 11, team: "data", level: "junior", remote: true},
  {id: 3, name: "Katherine", salary: 147592, yearsAtCompany: 5, team: "product", level: "mid", remote: true},
  {id: 4, name: "Radia", salary: 135371, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 5, name: "Margaret", salary: 65449, yearsAtCompany: 7, team: "platform", level: "senior", remote: true},
  {id: 6, name: "Ada", salary: 124189, yearsAtCompany: 15, team: "data", level: "mid", remote: true},
  {id: 7, name: "Dennis", salary: 101283, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 8, name: "Ken", salary: 157114, yearsAtCompany: 4, team: "platform", level: "senior", remote: false}
]
```
