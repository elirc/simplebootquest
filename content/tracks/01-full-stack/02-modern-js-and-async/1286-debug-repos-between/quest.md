---
slug: "debug-repos-between"
title: "Debug: Repos in a star count range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Repos in a star count range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of repos whose `stars` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "web-app", stars: 434, openIssues: 80, language: "TypeScript", archived: false},
  {id: 2, name: "billing", stars: 933, openIssues: 44, language: "Python", archived: false},
  {id: 3, name: "design-system", stars: 734, openIssues: 102, language: "Python", archived: false},
  {id: 4, name: "infra", stars: 1496, openIssues: 69, language: "TypeScript", archived: false},
  {id: 5, name: "mobile", stars: 2877, openIssues: 35, language: "Python", archived: false},
  {id: 6, name: "auth-service", stars: 586, openIssues: 136, language: "Go", archived: false},
  {id: 7, name: "notifier", stars: 1587, openIssues: 39, language: "TypeScript", archived: true},
  {id: 8, name: "api-gateway", stars: 4172, openIssues: 84, language: "TypeScript", archived: false}
]
```
