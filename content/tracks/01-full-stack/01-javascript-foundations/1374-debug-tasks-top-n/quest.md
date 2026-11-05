---
slug: "debug-tasks-top-n"
title: "Debug: Top tasks by priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top tasks by priority

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of the `n` tasks with the **highest** `priority`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 11, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 2, title: "Fix CSS", estimate: 11, priority: 5, status: "doing", assignee: "linus", blocked: false},
  {id: 3, title: "Add caching", estimate: 13, priority: 1, status: "doing", assignee: "linus", blocked: false},
  {id: 4, title: "Design schema", estimate: 14, priority: 1, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Write docs", estimate: 8, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Add search", estimate: 4, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 7, title: "Review PR", estimate: 4, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Fix login", estimate: 6, priority: 3, status: "doing", assignee: "grace", blocked: true}
]
```
