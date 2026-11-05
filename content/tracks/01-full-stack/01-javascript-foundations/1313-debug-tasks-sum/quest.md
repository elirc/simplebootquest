---
slug: "debug-tasks-sum"
title: "Debug: Total priority of all tasks"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total priority of all tasks

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `priority` across all tasks. An empty list totals 0.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Write docs", estimate: 5, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 2, title: "Add caching", estimate: 8, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 3, title: "Deploy API", estimate: 11, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 4, title: "Review PR", estimate: 8, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 5, title: "Fix login", estimate: 7, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 6, title: "Fix CSS", estimate: 11, priority: 4, status: "todo", assignee: "grace", blocked: false},
  {id: 7, title: "Add search", estimate: 10, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 8, title: "Refactor auth", estimate: 12, priority: 4, status: "doing", assignee: "linus", blocked: true}
]
```
