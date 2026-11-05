---
slug: "js-data-tasks-nth"
title: "Data: The n-th task by priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th task by priority

Return the title of the task ranked `n` (1 = highest `priority`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Deploy API", estimate: 10, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Add search", estimate: 9, priority: 4, status: "todo", assignee: "linus", blocked: false},
  {id: 3, title: "Review PR", estimate: 7, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Refactor auth", estimate: 5, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 5, title: "Plan sprint", estimate: 6, priority: 1, status: "todo", assignee: "linus", blocked: true},
  {id: 6, title: "Update deps", estimate: 13, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Write docs", estimate: 15, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 8, title: "Fix CSS", estimate: 8, priority: 4, status: "todo", assignee: "linus", blocked: true}
]
```
