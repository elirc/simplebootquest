---
slug: "debug-repos-group-count"
title: "Debug: How many repos per language?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many repos per language?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `language` to the number of repos with it. Only include values that appear.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "billing", stars: 4257, openIssues: 24, language: "TypeScript", archived: false},
  {id: 2, name: "api-gateway", stars: 3682, openIssues: 54, language: "Go", archived: true},
  {id: 3, name: "analytics", stars: 3450, openIssues: 56, language: "Python", archived: true},
  {id: 4, name: "web-app", stars: 342, openIssues: 39, language: "Python", archived: true},
  {id: 5, name: "auth-service", stars: 328, openIssues: 88, language: "TypeScript", archived: true},
  {id: 6, name: "cli", stars: 2725, openIssues: 62, language: "TypeScript", archived: true},
  {id: 7, name: "mobile", stars: 4088, openIssues: 109, language: "TypeScript", archived: false},
  {id: 8, name: "design-system", stars: 898, openIssues: 113, language: "Python", archived: true}
]
```
