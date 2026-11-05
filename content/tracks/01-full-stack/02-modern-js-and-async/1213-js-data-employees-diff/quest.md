---
slug: "js-data-employees-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's employees (same ids), return the ids whose `salary` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "Barbara", salary: 94732, yearsAtCompany: 9, team: "data", level: "senior", remote: false},
  {id: 2, name: "Dennis", salary: 138322, yearsAtCompany: 8, team: "data", level: "senior", remote: true},
  {id: 3, name: "Margaret", salary: 113907, yearsAtCompany: 13, team: "data", level: "mid", remote: false},
  {id: 4, name: "Frances", salary: 94310, yearsAtCompany: 6, team: "product", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 154410, yearsAtCompany: 6, team: "platform", level: "senior", remote: true},
  {id: 6, name: "Alan", salary: 149861, yearsAtCompany: 12, team: "platform", level: "mid", remote: false},
  {id: 7, name: "Ada", salary: 53120, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 8, name: "Grace", salary: 129855, yearsAtCompany: 9, team: "product", level: "mid", remote: false}
]
```
