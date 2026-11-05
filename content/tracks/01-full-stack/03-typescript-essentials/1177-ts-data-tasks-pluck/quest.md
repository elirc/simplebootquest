---
slug: "ts-data-tasks-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `estimate` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 12, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Fix login", estimate: 10, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 3, title: "Add search", estimate: 12, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 16, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 5, title: "Design schema", estimate: 1, priority: 1, status: "done", assignee: "linus", blocked: false},
  {id: 6, title: "Write tests", estimate: 3, priority: 4, status: "todo", assignee: "grace", blocked: false},
  {id: 7, title: "Review PR", estimate: 9, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 8, title: "Update deps", estimate: 3, priority: 1, status: "done", assignee: "grace", blocked: true}
]
```

Type the parameters and the return value. The interface is already written for you.
