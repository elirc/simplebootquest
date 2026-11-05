---
slug: "ts-data-tasks-count-cat"
title: "Data: Count tasks by assignee"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count tasks by assignee

Return how many tasks have `assignee` equal to `value`.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Write tests", estimate: 15, priority: 5, status: "done", assignee: "linus", blocked: true},
  {id: 2, title: "Fix login", estimate: 7, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 3, title: "Update deps", estimate: 15, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 4, title: "Write docs", estimate: 12, priority: 1, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Deploy API", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 6, title: "Design schema", estimate: 14, priority: 1, status: "todo", assignee: "grace", blocked: false},
  {id: 7, title: "Fix CSS", estimate: 6, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 8, title: "Refactor auth", estimate: 9, priority: 5, status: "doing", assignee: "ada", blocked: true}
]
```

Type the parameters and the return value. The interface is already written for you.
