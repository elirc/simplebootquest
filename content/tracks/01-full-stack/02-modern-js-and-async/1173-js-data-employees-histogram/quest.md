---
slug: "js-data-employees-histogram"
title: "Data: Bucket employees by salary"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket employees by salary

Group employees into buckets of width `width` by `salary`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 76440, yearsAtCompany: 9, team: "product", level: "senior", remote: true},
  {id: 2, name: "Katherine", salary: 46757, yearsAtCompany: 3, team: "product", level: "junior", remote: true},
  {id: 3, name: "Dennis", salary: 75651, yearsAtCompany: 13, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Grace", salary: 51957, yearsAtCompany: 13, team: "platform", level: "junior", remote: true},
  {id: 5, name: "Tim", salary: 72790, yearsAtCompany: 9, team: "product", level: "senior", remote: false},
  {id: 6, name: "Alan", salary: 136843, yearsAtCompany: 8, team: "product", level: "senior", remote: true},
  {id: 7, name: "Ken", salary: 67221, yearsAtCompany: 7, team: "data", level: "mid", remote: false},
  {id: 8, name: "Linus", salary: 74171, yearsAtCompany: 6, team: "data", level: "mid", remote: false}
]
```
