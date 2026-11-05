---
slug: "js-data-tasks-paginate"
title: "Data: Paginate tasks"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate tasks

Return `{ items, page, totalPages }` where `items` are the titles on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Design schema", estimate: 15, priority: 3, status: "doing", assignee: "ada", blocked: false},
  {id: 2, title: "Deploy API", estimate: 5, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 3, title: "Add search", estimate: 11, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 4, title: "Write docs", estimate: 13, priority: 3, status: "todo", assignee: "ada", blocked: false},
  {id: 5, title: "Refactor auth", estimate: 4, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 6, title: "Add caching", estimate: 12, priority: 3, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Review PR", estimate: 10, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Fix CSS", estimate: 16, priority: 4, status: "todo", assignee: "linus", blocked: true}
]
```
