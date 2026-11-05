---
slug: "debug-tasks-between"
title: "Debug: Tasks in a estimate (hours) range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Tasks in a estimate (hours) range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of tasks whose `estimate` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Deploy API", estimate: 9, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 2, title: "Fix login", estimate: 5, priority: 2, status: "done", assignee: "linus", blocked: false},
  {id: 3, title: "Design schema", estimate: 2, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 4, title: "Write tests", estimate: 11, priority: 4, status: "todo", assignee: "ada", blocked: false},
  {id: 5, title: "Write docs", estimate: 3, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Review PR", estimate: 15, priority: 2, status: "todo", assignee: "linus", blocked: true},
  {id: 7, title: "Add caching", estimate: 9, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 8, title: "Add search", estimate: 11, priority: 3, status: "done", assignee: "grace", blocked: false}
]
```
