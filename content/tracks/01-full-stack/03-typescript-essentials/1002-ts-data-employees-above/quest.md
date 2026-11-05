---
slug: "ts-data-employees-above"
title: "Data: Employees with a salary above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Employees with a salary above a limit

Return the name of every employee whose `salary` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `EMPLOYEES` in the tests):

```js
const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 43412, yearsAtCompany: 15, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Ken", salary: 136177, yearsAtCompany: 4, team: "data", level: "mid", remote: true},
  {id: 3, name: "Katherine", salary: 51601, yearsAtCompany: 13, team: "platform", level: "junior", remote: false},
  {id: 4, name: "Linus", salary: 42892, yearsAtCompany: 11, team: "product", level: "junior", remote: false},
  {id: 5, name: "Tim", salary: 154324, yearsAtCompany: 13, team: "data", level: "junior", remote: true},
  {id: 6, name: "Barbara", salary: 87737, yearsAtCompany: 3, team: "platform", level: "junior", remote: false},
  {id: 7, name: "Margaret", salary: 99350, yearsAtCompany: 14, team: "platform", level: "junior", remote: true},
  {id: 8, name: "Dennis", salary: 150825, yearsAtCompany: 5, team: "data", level: "junior", remote: false}
]
```

Type the parameters and the return value. The interface is already written for you.
