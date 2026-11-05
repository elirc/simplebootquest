---
slug: "debug-tasks-average"
title: "Debug: Average priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average priority

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `priority` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Deploy API", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: true},
  {id: 2, title: "Update deps", estimate: 13, priority: 1, status: "doing", assignee: "grace", blocked: true},
  {id: 3, title: "Plan sprint", estimate: 4, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 11, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Design schema", estimate: 5, priority: 4, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Add caching", estimate: 5, priority: 3, status: "todo", assignee: "ada", blocked: true},
  {id: 7, title: "Fix login", estimate: 9, priority: 1, status: "done", assignee: "ada", blocked: true},
  {id: 8, title: "Review PR", estimate: 5, priority: 2, status: "doing", assignee: "ada", blocked: true}
]
```
