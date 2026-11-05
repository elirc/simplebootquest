---
slug: "debug-tasks-percent"
title: "Debug: What share of tasks are blocked?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: What share of tasks are blocked?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the percentage (0–100, rounded to a whole number) of tasks where `blocked` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Review PR", estimate: 15, priority: 1, status: "doing", assignee: "ada", blocked: true},
  {id: 2, title: "Add search", estimate: 12, priority: 3, status: "doing", assignee: "linus", blocked: false},
  {id: 3, title: "Refactor auth", estimate: 13, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 4, title: "Plan sprint", estimate: 1, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Write docs", estimate: 11, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 6, title: "Deploy API", estimate: 11, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Write tests", estimate: 16, priority: 5, status: "todo", assignee: "linus", blocked: true},
  {id: 8, title: "Fix CSS", estimate: 1, priority: 2, status: "done", assignee: "linus", blocked: false}
]
```
