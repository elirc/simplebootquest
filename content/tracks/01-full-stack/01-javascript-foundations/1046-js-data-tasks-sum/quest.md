---
slug: "js-data-tasks-sum"
title: "Data: Total estimate (hours) of all tasks"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total estimate (hours) of all tasks

Return the sum of `estimate` across all tasks. An empty list totals 0.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Update deps", estimate: 1, priority: 3, status: "done", assignee: "grace", blocked: false},
  {id: 2, title: "Add caching", estimate: 6, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 14, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Write tests", estimate: 12, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 5, title: "Deploy API", estimate: 5, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 6, title: "Write docs", estimate: 12, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 7, title: "Fix login", estimate: 7, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 8, priority: 3, status: "doing", assignee: "grace", blocked: true}
]
```
