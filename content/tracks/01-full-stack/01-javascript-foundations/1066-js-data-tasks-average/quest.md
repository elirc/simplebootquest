---
slug: "js-data-tasks-average"
title: "Data: Average priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average priority

Return the average `priority` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Review PR", estimate: 14, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Update deps", estimate: 14, priority: 5, status: "todo", assignee: "linus", blocked: false},
  {id: 3, title: "Plan sprint", estimate: 2, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 4, title: "Fix CSS", estimate: 2, priority: 3, status: "done", assignee: "linus", blocked: false},
  {id: 5, title: "Design schema", estimate: 14, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 6, title: "Refactor auth", estimate: 1, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 7, title: "Write docs", estimate: 12, priority: 3, status: "doing", assignee: "linus", blocked: true},
  {id: 8, title: "Write tests", estimate: 11, priority: 3, status: "doing", assignee: "ada", blocked: false}
]
```
