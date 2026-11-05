---
slug: "debug-repos-every-some"
title: "Debug: Are all repos under a star count limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all repos under a star count limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** repo has `stars` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "notifier", stars: 4492, openIssues: 37, language: "TypeScript", archived: false},
  {id: 2, name: "infra", stars: 2224, openIssues: 47, language: "Python", archived: false},
  {id: 3, name: "analytics", stars: 4875, openIssues: 98, language: "Go", archived: true},
  {id: 4, name: "mobile", stars: 2350, openIssues: 120, language: "Python", archived: true},
  {id: 5, name: "search", stars: 4894, openIssues: 29, language: "Go", archived: false},
  {id: 6, name: "design-system", stars: 832, openIssues: 27, language: "Go", archived: false},
  {id: 7, name: "web-app", stars: 956, openIssues: 110, language: "Go", archived: true},
  {id: 8, name: "billing", stars: 2204, openIssues: 25, language: "Go", archived: false}
]
```
