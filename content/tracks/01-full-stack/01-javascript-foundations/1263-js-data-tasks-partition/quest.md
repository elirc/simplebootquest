---
slug: "js-data-tasks-partition"
title: "Data: Split tasks by \"blocked\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split tasks by "blocked"

Return `{ yes, no }`: the titles of tasks where `blocked` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 13, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Write docs", estimate: 14, priority: 3, status: "done", assignee: "ada", blocked: false},
  {id: 3, title: "Review PR", estimate: 4, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 4, title: "Deploy API", estimate: 7, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 5, title: "Update deps", estimate: 13, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 6, title: "Fix CSS", estimate: 1, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 7, title: "Add search", estimate: 11, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 8, title: "Fix login", estimate: 13, priority: 4, status: "doing", assignee: "grace", blocked: false}
]
```
