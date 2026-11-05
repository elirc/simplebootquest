---
slug: "debug-repos-sum"
title: "Debug: Total open issues of all repos"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total open issues of all repos

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `openIssues` across all repos. An empty list totals 0.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "notifier", stars: 175, openIssues: 22, language: "TypeScript", archived: true},
  {id: 2, name: "infra", stars: 4420, openIssues: 117, language: "Go", archived: false},
  {id: 3, name: "mobile", stars: 2601, openIssues: 75, language: "TypeScript", archived: false},
  {id: 4, name: "cli", stars: 1558, openIssues: 105, language: "Go", archived: true},
  {id: 5, name: "api-gateway", stars: 5254, openIssues: 139, language: "TypeScript", archived: false},
  {id: 6, name: "analytics", stars: 2462, openIssues: 139, language: "Go", archived: true},
  {id: 7, name: "web-app", stars: 4068, openIssues: 91, language: "Python", archived: false},
  {id: 8, name: "design-system", stars: 1370, openIssues: 61, language: "Python", archived: true}
]
```
