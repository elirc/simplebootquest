---
slug: "js-data-tasks-sort-asc"
title: "Data: Sort tasks by estimate (hours)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort tasks by estimate (hours)

Return the titles sorted by `estimate` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Write tests", estimate: 16, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Plan sprint", estimate: 10, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 3, title: "Write docs", estimate: 14, priority: 5, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 13, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 5, title: "Refactor auth", estimate: 10, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Deploy API", estimate: 11, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 7, title: "Add search", estimate: 11, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Fix login", estimate: 14, priority: 1, status: "done", assignee: "linus", blocked: false}
]
```
