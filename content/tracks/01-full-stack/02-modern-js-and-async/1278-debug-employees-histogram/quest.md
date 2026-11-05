---
slug: "debug-employees-histogram"
title: "Debug: Bucket employees by years at the company"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Bucket employees by years at the company

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Group employees into buckets of width `width` by `yearsAtCompany`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 152841, yearsAtCompany: 7, team: "product", level: "junior", remote: true},
  {id: 2, name: "Dennis", salary: 100468, yearsAtCompany: 5, team: "data", level: "senior", remote: false},
  {id: 3, name: "Grace", salary: 50529, yearsAtCompany: 4, team: "data", level: "mid", remote: true},
  {id: 4, name: "Radia", salary: 79726, yearsAtCompany: 3, team: "platform", level: "mid", remote: true},
  {id: 5, name: "Barbara", salary: 158832, yearsAtCompany: 1, team: "product", level: "mid", remote: false},
  {id: 6, name: "Katherine", salary: 66695, yearsAtCompany: 10, team: "platform", level: "junior", remote: true},
  {id: 7, name: "Margaret", salary: 50640, yearsAtCompany: 12, team: "product", level: "mid", remote: true},
  {id: 8, name: "Ada", salary: 155657, yearsAtCompany: 9, team: "product", level: "mid", remote: true}
]
```
