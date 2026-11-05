---
slug: "js-data-tasks-search"
title: "Data: Search tasks by title"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search tasks by title

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Fix login", estimate: 4, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 2, title: "Plan sprint", estimate: 10, priority: 2, status: "done", assignee: "grace", blocked: true},
  {id: 3, title: "Add search", estimate: 4, priority: 1, status: "done", assignee: "linus", blocked: true},
  {id: 4, title: "Review PR", estimate: 12, priority: 5, status: "todo", assignee: "linus", blocked: false},
  {id: 5, title: "Deploy API", estimate: 9, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 6, title: "Refactor auth", estimate: 10, priority: 5, status: "done", assignee: "linus", blocked: false},
  {id: 7, title: "Fix CSS", estimate: 10, priority: 3, status: "todo", assignee: "grace", blocked: true},
  {id: 8, title: "Write tests", estimate: 3, priority: 1, status: "done", assignee: "linus", blocked: false}
]
```
