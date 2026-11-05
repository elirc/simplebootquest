---
slug: "ts-data-tasks-average"
title: "Data: Average priority"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average priority

Return the average `priority` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 6, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 2, title: "Write tests", estimate: 15, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 3, title: "Update deps", estimate: 12, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Add search", estimate: 12, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 5, title: "Add caching", estimate: 9, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 6, title: "Deploy API", estimate: 11, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Fix login", estimate: 3, priority: 1, status: "done", assignee: "linus", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 6, priority: 5, status: "todo", assignee: "grace", blocked: true}
]
```

Type the parameters and the return value. The interface is already written for you.
