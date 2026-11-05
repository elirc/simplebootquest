---
slug: "js-data-tasks-count-cat"
title: "Data: Count tasks by assignee"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count tasks by assignee

Return how many tasks have `assignee` equal to `value`.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 15, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Review PR", estimate: 13, priority: 4, status: "todo", assignee: "ada", blocked: false},
  {id: 3, title: "Add search", estimate: 15, priority: 4, status: "todo", assignee: "linus", blocked: false},
  {id: 4, title: "Fix login", estimate: 7, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 5, title: "Update deps", estimate: 10, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 6, title: "Design schema", estimate: 15, priority: 1, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Write tests", estimate: 15, priority: 2, status: "todo", assignee: "linus", blocked: true},
  {id: 8, title: "Fix CSS", estimate: 8, priority: 1, status: "done", assignee: "ada", blocked: false}
]
```
