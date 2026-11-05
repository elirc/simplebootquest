---
slug: "js-data-tasks-group-sum"
title: "Data: Total estimate (hours) per assignee"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total estimate (hours) per assignee

Return an object mapping each `assignee` to the **sum** of `estimate` for tasks in it.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 15, priority: 3, status: "done", assignee: "ada", blocked: true},
  {id: 2, title: "Write docs", estimate: 8, priority: 4, status: "done", assignee: "linus", blocked: false},
  {id: 3, title: "Refactor auth", estimate: 12, priority: 1, status: "done", assignee: "linus", blocked: true},
  {id: 4, title: "Write tests", estimate: 14, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 5, title: "Add search", estimate: 14, priority: 5, status: "todo", assignee: "linus", blocked: false},
  {id: 6, title: "Fix login", estimate: 14, priority: 5, status: "doing", assignee: "grace", blocked: true},
  {id: 7, title: "Update deps", estimate: 10, priority: 4, status: "todo", assignee: "grace", blocked: false},
  {id: 8, title: "Deploy API", estimate: 5, priority: 1, status: "todo", assignee: "ada", blocked: false}
]
```
