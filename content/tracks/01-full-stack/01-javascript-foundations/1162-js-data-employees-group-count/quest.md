---
slug: "js-data-employees-group-count"
title: "Data: How many employees per team?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many employees per team?

Return an object mapping each `team` to the number of employees with it. Only include values that appear.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Dennis", salary: 59162, yearsAtCompany: 9, team: "data", level: "senior", remote: true},
  {id: 2, name: "Frances", salary: 61564, yearsAtCompany: 6, team: "product", level: "mid", remote: false},
  {id: 3, name: "Katherine", salary: 148474, yearsAtCompany: 15, team: "data", level: "junior", remote: false},
  {id: 4, name: "Ada", salary: 91967, yearsAtCompany: 11, team: "data", level: "senior", remote: false},
  {id: 5, name: "Tim", salary: 152096, yearsAtCompany: 9, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Grace", salary: 70465, yearsAtCompany: 7, team: "product", level: "mid", remote: true},
  {id: 7, name: "Ken", salary: 130458, yearsAtCompany: 15, team: "platform", level: "junior", remote: false},
  {id: 8, name: "Margaret", salary: 53572, yearsAtCompany: 7, team: "data", level: "junior", remote: true}
]
```
