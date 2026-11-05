---
slug: "js-data-tasks-above"
title: "Data: Tasks with a estimate (hours) above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Tasks with a estimate (hours) above a limit

Return the title of every task whose `estimate` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Add search", estimate: 13, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 2, title: "Fix CSS", estimate: 8, priority: 2, status: "done", assignee: "ada", blocked: true},
  {id: 3, title: "Fix login", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Deploy API", estimate: 10, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 5, title: "Plan sprint", estimate: 16, priority: 3, status: "done", assignee: "grace", blocked: true},
  {id: 6, title: "Review PR", estimate: 1, priority: 5, status: "todo", assignee: "linus", blocked: false},
  {id: 7, title: "Write tests", estimate: 3, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 8, title: "Refactor auth", estimate: 2, priority: 3, status: "done", assignee: "grace", blocked: true}
]
```
