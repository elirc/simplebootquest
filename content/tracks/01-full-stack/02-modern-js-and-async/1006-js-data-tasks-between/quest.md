---
slug: "js-data-tasks-between"
title: "Data: Tasks in a priority range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Tasks in a priority range

Return the titles of tasks whose `priority` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Add caching", estimate: 8, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Add search", estimate: 9, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 3, title: "Design schema", estimate: 13, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Deploy API", estimate: 5, priority: 1, status: "todo", assignee: "linus", blocked: true},
  {id: 5, title: "Write docs", estimate: 14, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 6, title: "Refactor auth", estimate: 16, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 7, title: "Fix login", estimate: 10, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Write tests", estimate: 9, priority: 1, status: "done", assignee: "grace", blocked: false}
]
```
