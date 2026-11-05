---
slug: "debug-tasks-search"
title: "Debug: Search tasks by title"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Search tasks by title

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes case-sensitivity. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Fix login", estimate: 6, priority: 4, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Plan sprint", estimate: 16, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Add search", estimate: 5, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 15, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Update deps", estimate: 3, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Write docs", estimate: 7, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 7, title: "Review PR", estimate: 14, priority: 1, status: "todo", assignee: "grace", blocked: false},
  {id: 8, title: "Deploy API", estimate: 8, priority: 5, status: "todo", assignee: "ada", blocked: false}
]
```
