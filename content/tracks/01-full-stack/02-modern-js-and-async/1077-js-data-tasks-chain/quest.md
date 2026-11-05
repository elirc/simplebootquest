---
slug: "js-data-tasks-chain"
title: "Data: Filter, sort, map: tasks in one assignee"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: tasks in one assignee

Return the titles of tasks whose `assignee` equals `value`, sorted by `estimate` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Design schema", estimate: 12, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 2, title: "Update deps", estimate: 7, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 3, title: "Add caching", estimate: 8, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 4, title: "Deploy API", estimate: 8, priority: 1, status: "done", assignee: "ada", blocked: true},
  {id: 5, title: "Refactor auth", estimate: 5, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 6, title: "Fix CSS", estimate: 11, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Fix login", estimate: 14, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 13, priority: 3, status: "doing", assignee: "linus", blocked: true}
]
```
