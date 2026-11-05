---
slug: "ts-data-tasks-above"
title: "Data: Tasks with a priority above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Tasks with a priority above a limit

Return the title of every task whose `priority` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 13, priority: 3, status: "done", assignee: "ada", blocked: false},
  {id: 2, title: "Add search", estimate: 7, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Deploy API", estimate: 6, priority: 5, status: "done", assignee: "linus", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 15, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Fix login", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 6, title: "Review PR", estimate: 10, priority: 1, status: "done", assignee: "ada", blocked: false},
  {id: 7, title: "Update deps", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 14, priority: 3, status: "doing", assignee: "linus", blocked: true}
]
```

Type the parameters and the return value. The interface is already written for you.
