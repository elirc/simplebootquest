---
slug: "js-data-tasks-group-count"
title: "Data: How many tasks per assignee?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many tasks per assignee?

Return an object mapping each `assignee` to the number of tasks with it. Only include values that appear.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Fix CSS", estimate: 5, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Add caching", estimate: 9, priority: 1, status: "todo", assignee: "ada", blocked: true},
  {id: 3, title: "Refactor auth", estimate: 3, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 4, title: "Review PR", estimate: 7, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 5, title: "Write tests", estimate: 6, priority: 1, status: "todo", assignee: "ada", blocked: true},
  {id: 6, title: "Write docs", estimate: 13, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Fix login", estimate: 9, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 8, title: "Plan sprint", estimate: 7, priority: 5, status: "todo", assignee: "grace", blocked: true}
]
```
