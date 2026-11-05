---
slug: "js-data-tasks-histogram"
title: "Data: Bucket tasks by priority"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket tasks by priority

Group tasks into buckets of width `width` by `priority`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Write tests", estimate: 9, priority: 1, status: "done", assignee: "grace", blocked: false},
  {id: 2, title: "Fix login", estimate: 6, priority: 4, status: "todo", assignee: "ada", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 2, priority: 1, status: "doing", assignee: "grace", blocked: false},
  {id: 4, title: "Refactor auth", estimate: 13, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 5, title: "Review PR", estimate: 6, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 6, title: "Add caching", estimate: 3, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 7, title: "Update deps", estimate: 2, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 8, title: "Add search", estimate: 13, priority: 3, status: "doing", assignee: "linus", blocked: true}
]
```
