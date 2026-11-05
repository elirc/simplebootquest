---
slug: "js-data-tasks-every-some"
title: "Data: Are all tasks under a estimate (hours) limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all tasks under a estimate (hours) limit?

Return `true` if **every** task has `estimate` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Write tests", estimate: 2, priority: 1, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Fix login", estimate: 9, priority: 5, status: "done", assignee: "ada", blocked: true},
  {id: 3, title: "Plan sprint", estimate: 8, priority: 2, status: "done", assignee: "grace", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 5, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Design schema", estimate: 1, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 6, title: "Add search", estimate: 4, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 7, title: "Update deps", estimate: 13, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 8, title: "Add caching", estimate: 14, priority: 3, status: "done", assignee: "linus", blocked: false}
]
```
