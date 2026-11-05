---
slug: "js-data-tasks-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's tasks (same ids), return the ids whose `estimate` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, title: "Update deps", estimate: 15, priority: 2, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Deploy API", estimate: 3, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Fix login", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Add search", estimate: 16, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 5, title: "Write tests", estimate: 2, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 6, title: "Fix CSS", estimate: 15, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 7, title: "Refactor auth", estimate: 2, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 8, title: "Write docs", estimate: 13, priority: 3, status: "done", assignee: "ada", blocked: true}
]
```
