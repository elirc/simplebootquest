---
slug: "js-data-tasks-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `estimate` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Design schema", estimate: 15, priority: 4, status: "done", assignee: "linus", blocked: true},
  {id: 2, title: "Deploy API", estimate: 7, priority: 2, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Refactor auth", estimate: 15, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Plan sprint", estimate: 5, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 6, title: "Fix login", estimate: 12, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Update deps", estimate: 12, priority: 1, status: "todo", assignee: "linus", blocked: true},
  {id: 8, title: "Review PR", estimate: 15, priority: 2, status: "doing", assignee: "grace", blocked: false}
]
```
