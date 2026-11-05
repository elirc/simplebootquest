---
slug: "ts-data-tasks-percent"
title: "Data: What share of tasks are blocked?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of tasks are blocked?

Return the percentage (0–100, rounded to a whole number) of tasks where `blocked` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 6, priority: 3, status: "todo", assignee: "ada", blocked: true},
  {id: 2, title: "Deploy API", estimate: 11, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 3, title: "Plan sprint", estimate: 2, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Add caching", estimate: 15, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Write docs", estimate: 8, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 6, title: "Write tests", estimate: 6, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Review PR", estimate: 6, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 8, title: "Update deps", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false}
]
```

Type the parameters and the return value. The interface is already written for you.
