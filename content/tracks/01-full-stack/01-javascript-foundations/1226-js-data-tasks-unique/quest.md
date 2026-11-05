---
slug: "js-data-tasks-unique"
title: "Data: Distinct status values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct status values

Return every distinct `status` that appears, sorted alphabetically.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 1, priority: 3, status: "done", assignee: "ada", blocked: true},
  {id: 2, title: "Design schema", estimate: 10, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 3, title: "Write tests", estimate: 8, priority: 2, status: "todo", assignee: "linus", blocked: true},
  {id: 4, title: "Update deps", estimate: 6, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 5, title: "Plan sprint", estimate: 7, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 6, title: "Review PR", estimate: 6, priority: 1, status: "todo", assignee: "linus", blocked: false},
  {id: 7, title: "Add caching", estimate: 7, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 8, title: "Fix login", estimate: 7, priority: 1, status: "todo", assignee: "linus", blocked: false}
]
```
