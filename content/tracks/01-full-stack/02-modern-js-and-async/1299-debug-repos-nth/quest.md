---
slug: "debug-repos-nth"
title: "Debug: The n-th repo by star count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The n-th repo by star count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the name of the repo ranked `n` (1 = highest `stars`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "docs", stars: 5061, openIssues: 35, language: "TypeScript", archived: true},
  {id: 2, name: "cli", stars: 593, openIssues: 33, language: "Go", archived: false},
  {id: 3, name: "mobile", stars: 3009, openIssues: 111, language: "Python", archived: true},
  {id: 4, name: "auth-service", stars: 2920, openIssues: 126, language: "Python", archived: false},
  {id: 5, name: "analytics", stars: 913, openIssues: 92, language: "Python", archived: false},
  {id: 6, name: "notifier", stars: 3683, openIssues: 119, language: "Python", archived: false},
  {id: 7, name: "design-system", stars: 2931, openIssues: 63, language: "TypeScript", archived: false},
  {id: 8, name: "search", stars: 4956, openIssues: 97, language: "Python", archived: true}
]
```
