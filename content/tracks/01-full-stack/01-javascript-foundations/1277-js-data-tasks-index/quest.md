---
slug: "js-data-tasks-index"
title: "Data: Index tasks by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index tasks by id

Return an object mapping each `id` to the task's title, for fast lookups.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Fix login", estimate: 9, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Refactor auth", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 3, title: "Write tests", estimate: 10, priority: 3, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Add search", estimate: 6, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Update deps", estimate: 1, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Review PR", estimate: 7, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 7, title: "Add caching", estimate: 13, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 8, title: "Design schema", estimate: 15, priority: 2, status: "done", assignee: "linus", blocked: true}
]
```
