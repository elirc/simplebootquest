---
slug: "js-data-employees-sort-asc"
title: "Data: Sort employees by salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort employees by salary

Return the names sorted by `salary` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 125917, yearsAtCompany: 0, team: "product", level: "senior", remote: false},
  {id: 2, name: "Alan", salary: 116408, yearsAtCompany: 0, team: "data", level: "junior", remote: false},
  {id: 3, name: "Margaret", salary: 61586, yearsAtCompany: 12, team: "product", level: "senior", remote: true},
  {id: 4, name: "Ada", salary: 133067, yearsAtCompany: 14, team: "data", level: "junior", remote: false},
  {id: 5, name: "Grace", salary: 44044, yearsAtCompany: 4, team: "platform", level: "senior", remote: false},
  {id: 6, name: "Barbara", salary: 99398, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 7, name: "Dennis", salary: 79019, yearsAtCompany: 4, team: "platform", level: "mid", remote: true},
  {id: 8, name: "Linus", salary: 121008, yearsAtCompany: 13, team: "platform", level: "junior", remote: true}
]
```
