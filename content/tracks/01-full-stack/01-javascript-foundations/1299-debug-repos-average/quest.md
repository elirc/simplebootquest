---
slug: "debug-repos-average"
title: "Debug: Average open issues"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average open issues

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `openIssues` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "auth-service", stars: 1683, openIssues: 46, language: "TypeScript", archived: false},
  {id: 2, name: "docs", stars: 5395, openIssues: 63, language: "Python", archived: true},
  {id: 3, name: "web-app", stars: 2314, openIssues: 49, language: "Python", archived: false},
  {id: 4, name: "infra", stars: 331, openIssues: 131, language: "Python", archived: true},
  {id: 5, name: "mobile", stars: 2100, openIssues: 115, language: "TypeScript", archived: false},
  {id: 6, name: "analytics", stars: 579, openIssues: 88, language: "Python", archived: false},
  {id: 7, name: "billing", stars: 1443, openIssues: 53, language: "TypeScript", archived: true},
  {id: 8, name: "api-gateway", stars: 1262, openIssues: 25, language: "TypeScript", archived: false}
]
```
