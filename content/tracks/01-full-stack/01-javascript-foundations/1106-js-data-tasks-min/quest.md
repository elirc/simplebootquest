---
slug: "js-data-tasks-min"
title: "Data: The task with the lowest priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The task with the lowest priority

Return the title of the task with the **lowest** `priority` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 5, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Add caching", estimate: 3, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Design schema", estimate: 7, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 4, title: "Fix CSS", estimate: 4, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 5, title: "Deploy API", estimate: 7, priority: 1, status: "done", assignee: "ada", blocked: false},
  {id: 6, title: "Fix login", estimate: 8, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 7, title: "Refactor auth", estimate: 4, priority: 4, status: "done", assignee: "linus", blocked: true},
  {id: 8, title: "Review PR", estimate: 8, priority: 5, status: "doing", assignee: "linus", blocked: true}
]
```
