---
slug: "js-data-tasks-avg-per"
title: "Data: Average estimate (hours) per assignee"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average estimate (hours) per assignee

Return an object mapping each `assignee` to the average `estimate` of its tasks, rounded to a whole number.

The tests call your function with this data (also available as `TASKS` in the tests):

```js
const TASKS = [
  {id: 1, title: "Deploy API", estimate: 9, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 2, title: "Write tests", estimate: 12, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 3, title: "Refactor auth", estimate: 6, priority: 1, status: "todo", assignee: "ada", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 8, priority: 3, status: "done", assignee: "linus", blocked: false},
  {id: 5, title: "Plan sprint", estimate: 4, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 6, title: "Review PR", estimate: 7, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Add caching", estimate: 5, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 8, title: "Write docs", estimate: 15, priority: 4, status: "doing", assignee: "grace", blocked: false}
]
```
