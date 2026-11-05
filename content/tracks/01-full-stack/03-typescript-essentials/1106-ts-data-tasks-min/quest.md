---
slug: "ts-data-tasks-min"
title: "Data: The task with the lowest estimate (hours)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The task with the lowest estimate (hours)

Return the title of the task with the **lowest** `estimate` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Fix login", estimate: 7, priority: 5, status: "todo", assignee: "ada", blocked: false},
  {id: 2, title: "Review PR", estimate: 10, priority: 1, status: "done", assignee: "grace", blocked: true},
  {id: 3, title: "Refactor auth", estimate: 12, priority: 2, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Deploy API", estimate: 7, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 5, title: "Write docs", estimate: 10, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 6, title: "Add search", estimate: 14, priority: 4, status: "doing", assignee: "linus", blocked: true},
  {id: 7, title: "Add caching", estimate: 11, priority: 3, status: "done", assignee: "ada", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 5, priority: 4, status: "todo", assignee: "grace", blocked: false}
]
```

Type the parameters and the return value. The interface is already written for you.
