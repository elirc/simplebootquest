---
slug: "debug-tasks-group-sum"
title: "Debug: Total priority per assignee"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total priority per assignee

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `assignee` to the **sum** of `priority` for tasks in it.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Review PR", estimate: 14, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 2, title: "Update deps", estimate: 7, priority: 5, status: "doing", assignee: "ada", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 14, priority: 4, status: "done", assignee: "linus", blocked: false},
  {id: 4, title: "Fix login", estimate: 7, priority: 3, status: "todo", assignee: "ada", blocked: false},
  {id: 5, title: "Refactor auth", estimate: 4, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 6, title: "Write tests", estimate: 9, priority: 4, status: "todo", assignee: "ada", blocked: true},
  {id: 7, title: "Write docs", estimate: 12, priority: 1, status: "done", assignee: "linus", blocked: true},
  {id: 8, title: "Add caching", estimate: 8, priority: 4, status: "done", assignee: "grace", blocked: true}
]
```
