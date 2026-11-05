---
slug: "ts-data-tasks-between"
title: "Data: Tasks in a estimate (hours) range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Tasks in a estimate (hours) range

Return the titles of tasks whose `estimate` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Review PR", estimate: 10, priority: 1, status: "todo", assignee: "ada", blocked: true},
  {id: 2, title: "Fix login", estimate: 1, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 3, title: "Design schema", estimate: 10, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 4, title: "Write tests", estimate: 5, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Plan sprint", estimate: 2, priority: 3, status: "todo", assignee: "grace", blocked: true},
  {id: 6, title: "Refactor auth", estimate: 11, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 7, title: "Write docs", estimate: 10, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 8, title: "Update deps", estimate: 3, priority: 2, status: "todo", assignee: "ada", blocked: false}
]
```

Type the parameters and the return value. The interface is already written for you.
