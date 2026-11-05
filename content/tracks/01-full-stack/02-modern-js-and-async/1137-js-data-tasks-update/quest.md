---
slug: "js-data-tasks-update"
title: "Data: Update tasks immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update tasks immutably

Return a **new** array where every task with `assignee` equal to `value` has `priority` increased by `amount`. Other tasks are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 8, priority: 4, status: "todo", assignee: "ada", blocked: true},
  {id: 2, title: "Deploy API", estimate: 5, priority: 3, status: "doing", assignee: "ada", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 13, priority: 1, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Review PR", estimate: 15, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Add search", estimate: 4, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 6, title: "Add caching", estimate: 15, priority: 5, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Update deps", estimate: 12, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 8, title: "Design schema", estimate: 12, priority: 4, status: "doing", assignee: "ada", blocked: true}
]
```
