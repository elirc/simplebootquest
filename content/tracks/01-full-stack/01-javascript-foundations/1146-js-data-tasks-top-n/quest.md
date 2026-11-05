---
slug: "js-data-tasks-top-n"
title: "Data: Top tasks by estimate (hours)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top tasks by estimate (hours)

Return the titles of the `n` tasks with the **highest** `estimate`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Fix CSS", estimate: 1, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 2, title: "Update deps", estimate: 3, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 3, title: "Fix login", estimate: 14, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 4, title: "Add caching", estimate: 16, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 5, title: "Write docs", estimate: 6, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 6, title: "Review PR", estimate: 7, priority: 3, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Write tests", estimate: 13, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 8, title: "Plan sprint", estimate: 8, priority: 2, status: "todo", assignee: "ada", blocked: true}
]
```
