---
slug: "ts-data-tasks-every-some"
title: "Data: Are all tasks under a estimate (hours) limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all tasks under a estimate (hours) limit?

Return `true` if **every** task has `estimate` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Review PR", estimate: 13, priority: 5, status: "doing", assignee: "ada", blocked: true},
  {id: 2, title: "Refactor auth", estimate: 11, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 3, title: "Write tests", estimate: 13, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 4, title: "Write docs", estimate: 13, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 5, title: "Add caching", estimate: 7, priority: 2, status: "done", assignee: "ada", blocked: true},
  {id: 6, title: "Add search", estimate: 5, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 7, title: "Design schema", estimate: 14, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 11, priority: 3, status: "doing", assignee: "ada", blocked: true}
]
```

Type the parameters and the return value. The interface is already written for you.
