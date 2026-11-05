---
slug: "debug-tasks-lookup"
title: "Debug: Look up a task's priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a task's priority

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `priority` of the task whose title is `title`, or `null` if there isn't one.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Add caching", estimate: 11, priority: 2, status: "done", assignee: "linus", blocked: false},
  {id: 2, title: "Plan sprint", estimate: 14, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Refactor auth", estimate: 4, priority: 1, status: "doing", assignee: "grace", blocked: true},
  {id: 4, title: "Deploy API", estimate: 10, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Fix CSS", estimate: 10, priority: 3, status: "doing", assignee: "ada", blocked: false},
  {id: 6, title: "Fix login", estimate: 4, priority: 3, status: "doing", assignee: "linus", blocked: false},
  {id: 7, title: "Write tests", estimate: 13, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 8, title: "Review PR", estimate: 14, priority: 4, status: "todo", assignee: "grace", blocked: true}
]
```
